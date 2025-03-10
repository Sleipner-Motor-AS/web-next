import type { ProductTableSchema } from '@/db/schema';

export type Product = ReturnType<typeof schemaToDomain>;

export const schemaToDomain = (schema: ProductTableSchema) => {
  /**
   * Builds the URL for the product by using the category and slug
   */
  const getUrl = () => {
    //return `/${schema.category}/${schema.slug}` as const;
  };

  return {
    ...schema,
    getUrl,
  };
};

export const domainToSchema = (domain: Product): ProductTableSchema => {
  return {
    ...domain,
  };
};
