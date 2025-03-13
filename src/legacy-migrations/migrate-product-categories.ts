import pkg from 'pg';
const { Pool } = pkg;

import config from '../payload.config';
import { getPayload } from 'payload';

import { cms_product_categories } from '../payload-generated-schema';
import type { MarketCode } from '../markets';

// TODO: Real creds
const pool = new Pool({
  user: 'andersstrandseter',
  host: 'localhost',
  database: 'odin',
  password: '',
  port: 5432,
});

export async function migrateProductCategories() {
  try {
    const { rows } = await pool.query('SELECT * FROM products_productwebsitedata');

    const products: Record<string, { category: string; website: string }[]> = {};
    for (const row of rows) {
      if (!products[row.product_id]) {
        products[row.product_id] = [];
      }
      products[row.product_id].push({ category: row.category, website: row.website });
    }

    for (const product of Object.values(products)) {
      product.sort((a, b) => a.website.localeCompare(b.website));
    }

    const categoryGroupSet = new Set<string>();
    for (const categories of Object.values(products)) {
      categoryGroupSet.add(JSON.stringify(categories));
    }

    const categoryGroups = Array.from(categoryGroupSet).map((group) => JSON.parse(group));

    const payload = await getPayload({ config });

    const mapped: (typeof cms_product_categories.$inferInsert)[] = [];
    for (const group of categoryGroups) {
      const mainCategoryPriorityOrder: MarketCode[] = ['en', 'uk', 'no', 'se', 'dk', 'de', 'fi', 'it'];

      const mainCategory = group.sort(
        (a: { website: string }, b: { website: string }) =>
          mainCategoryPriorityOrder.indexOf(a.website as MarketCode) -
          mainCategoryPriorityOrder.indexOf(b.website as MarketCode),
      )[0];

      if (!mainCategory) {
        throw new Error('No category found');
      }

      const marketCategories = Object.fromEntries(
        group.map((c: { website: string; category: string }) => [c.website, c.category]),
      );

      mapped.push({
        category: mainCategory.category,
        ...marketCategories,
      });
    }

    const merged: (typeof cms_product_categories.$inferInsert)[] = [];
    for (const category of mapped) {
      const existing = merged.findIndex((c) => c.category === category.category);
      if (existing !== -1) {
        merged[existing] = { ...merged[existing], ...category };
      } else {
        merged.push(category);
      }
    }

    await payload.db.drizzle.delete(cms_product_categories);
    await payload.db.drizzle.insert(cms_product_categories).values(merged);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    await pool.end();
  }
}
