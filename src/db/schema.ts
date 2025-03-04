import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar({ length: 255 }).notNull().unique(),
});
