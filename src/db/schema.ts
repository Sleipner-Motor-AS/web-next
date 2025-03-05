import { integer, numeric, pgTable, varchar, pgEnum, boolean } from 'drizzle-orm/pg-core';

import { pimBooleanKeys, pimListKeys, pimStringKeys, pimUnitKeys } from './constants';

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

export const customerPricesTable = pgTable('customerPrices', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  net: numeric({ precision: 10, scale: 2 }).notNull(),
  gross: numeric({ precision: 10, scale: 2 }).notNull(),
  discount: numeric({ precision: 10, scale: 2 }).notNull(),

  customer: integer().references(() => customersTable.id, { onDelete: 'cascade' }),
  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

const pimStringKeyEnum = pgEnum('pim_string_key', pimStringKeys);

export const productPimStringValuesTable = pgTable('productPimStringValues', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  key: pimStringKeyEnum('pim_string_key'),
  value: varchar({ length: 255 }).notNull(),

  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

const pimBooleanKeyEnum = pgEnum('pim_boolean_key', pimBooleanKeys);

export const productPimBooleanValuesTable = pgTable('productPimBooleanValues', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  key: pimBooleanKeyEnum('pim_boolean_key'),
  value: boolean().notNull(),

  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

const pimListKeyEnum = pgEnum('pim_list_key', pimListKeys);

export const productPimListValuesTable = pgTable('productPimListValues', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  key: pimListKeyEnum('pim_list_key'),
  value: varchar({ length: 255 }).array().notNull(),

  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});

const pimUnitKeyEnum = pgEnum('pim_unit_key', pimUnitKeys);

export const productPimUnitValuesTable = pgTable('productPimUnitValues', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  key: pimUnitKeyEnum('pim_unit_key'),
  imperial_value: numeric({ precision: 10, scale: 2 }).notNull(),
  metric_value: numeric({ precision: 10, scale: 2 }).notNull(),
  imperial_unit: varchar({ length: 10 }).notNull(),
  metric_unit: varchar({ length: 10 }).notNull(),

  product: integer().references(() => productsTable.id, { onDelete: 'cascade' }),
});
