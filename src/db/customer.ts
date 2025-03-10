import { pgTableCreator, varchar, numeric, integer } from '@payloadcms/db-postgres/drizzle/pg-core';

import { productsTable } from './product';

const pgTable = pgTableCreator((name) => `db_${name}`);

export const customersTable = pgTable('customers', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  odin_id: integer().notNull().unique(),
  customer_no: varchar({ length: 255 }).notNull().unique(),
});

export const customerProductPricesTable = pgTable('customer_product_prices', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  net: numeric({ precision: 10, scale: 2 }).notNull(),
  gross: numeric({ precision: 10, scale: 2 }).notNull(),
  discount: numeric({ precision: 10, scale: 2 }).notNull(),

  customer: integer().references(() => customersTable.id, { onDelete: 'cascade' }),
  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});
