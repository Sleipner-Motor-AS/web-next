import { pgTableCreator, varchar, numeric, integer, text } from '@payloadcms/db-postgres/drizzle/pg-core';

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

export const marketProductsTable = pgTable('market_products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  slug: varchar({ length: 255 }).notNull().unique(),
  market: varchar({ length: 2 }).notNull().$type<MarketCode>(),

  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

export type ProductTableSchema = typeof productsTable.$inferSelect;

export const customersTable = pgTable('customers', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  odin_id: integer().notNull().unique(),
  customer_no: varchar({ length: 255 }).notNull().unique(),
});

export const customerPricesTable = pgTable('customer_prices', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  net: numeric({ precision: 10, scale: 2 }).notNull(),
  gross: numeric({ precision: 10, scale: 2 }).notNull(),
  discount: numeric({ precision: 10, scale: 2 }).notNull(),

  customer: integer().references(() => customersTable.id, { onDelete: 'cascade' }),
  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

export const allTables = {
  customers: customersTable,
  products: productsTable,
  customerPrices: customerPricesTable,
  // Always add new tables here..
};
