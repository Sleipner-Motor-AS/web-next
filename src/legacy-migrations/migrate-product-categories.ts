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

    const to_insert: (typeof cms_product_categories.$inferInsert)[] = [];
    for (const group of categoryGroups) {
      const categoryPriority: MarketCode[] = ['en', 'uk', 'no', 'se', 'dk', 'de', 'fi', 'it'];

      const mainCategory = group.find((c: { website: string }) => categoryPriority.includes(c.website as MarketCode));

      if (!mainCategory) {
        throw new Error('No category found');
      }

      const marketCategories = Object.fromEntries(
        group.map((c: { website: string; category: string }) => [c.website, c.category]),
      );

      to_insert.push({
        category: mainCategory.category,
        ...marketCategories,
      });
    }

    await payload.db.drizzle.delete(cms_product_categories);
    await payload.db.drizzle.insert(cms_product_categories).values(to_insert);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    await pool.end();
  }
}
