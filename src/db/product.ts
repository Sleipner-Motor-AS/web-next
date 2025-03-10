import { pgTableCreator, varchar, integer, text, unique, jsonb } from '@payloadcms/db-postgres/drizzle/pg-core';

import type { MarketCode } from '@/markets';

const pgTable = pgTableCreator((name) => `db_${name}`);

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  /**
   * Name of the product
   */
  name: text().notNull(),
  /**
   * Unique generated identifier from Odin
   */
  odin_id: integer().notNull().unique(),
  /**
   * Unique SKU used accross all Sleipner systems to identify the product
   */
  sku: varchar({ length: 255 }).notNull().unique(),
  /**
   * Secondary SKU that can change over time
   */
  sku2: varchar({ length: 255 }).notNull(),
});

export const marketProductsTable = pgTable(
  'market_products',
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),

    market: varchar({ length: 2 }).notNull().$type<MarketCode>(),
    slug: varchar({ length: 255 }).notNull().unique(),
    category: jsonb().notNull(),

    product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
  },
  () => ({
    // unique_market_product: unique('unique_market_product').on(table.product, table.market),
    // unique_market_slug: unique('unique_market_slug').on(table.market, table.slug),
    getUrl: () => {
      return 'some url';
    },
  }),
);
