import { integer, numeric, pgTable, varchar } from 'drizzle-orm/pg-core';

export const customersTable = pgTable('customers', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  odin_id: integer().notNull().unique(),
  customer_no: varchar({ length: 255 }).notNull().unique(),
});

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  odin_id: integer().notNull().unique(),
  sku: varchar({ length: 255 }).notNull().unique(),
  sku2: varchar({ length: 255 }).notNull().unique(),
  slug: varchar({ length: 255 }).notNull().unique(),
});

export const customerPrices = pgTable('customerPrices', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  customer: integer().references(() => customersTable.id),
  product: integer().references(() => productsTable.id),
  net: numeric({ precision: 10, scale: 2 }).notNull(),
  gross: numeric({ precision: 10, scale: 2 }).notNull(),
  discount: numeric({ precision: 10, scale: 2 }).notNull(),
});
