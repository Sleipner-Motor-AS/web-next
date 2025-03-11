import type { productsTable } from '@/db/tables/product';

export type ProductTableSchema = typeof productsTable.$inferSelect;

const schemaToDomain = (schema: ProductTableSchema) => {
  return {
    ...schema,
  };
};

const domainToSchema = (domain: Product): ProductTableSchema => {
  return {
    ...domain,
  };
};

export type Product = ReturnType<typeof schemaToDomain>;

export const product = {
  schemaToDomain,
  domainToSchema,
};
