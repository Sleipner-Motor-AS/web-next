import { getDb } from '@/db';

import { cms_products } from '@/payload-generated-schema';

import { productsTable, marketProductsTable } from '@/db/tables/product';

type CreateProductParams = {
  product: typeof productsTable.$inferInsert;
  marketProducts: (typeof marketProductsTable.$inferInsert)[];
  cmsProduct: typeof cms_products.$inferInsert;
};

export const createProduct = async ({ product, marketProducts, cmsProduct }: CreateProductParams) => {
  const db = await getDb();
  const ret = await db.transaction(async (tx) => {
    const [createdProduct] = await tx.insert(productsTable).values(product).returning({ id: productsTable.id });

    const createdMarketProducts = await tx
      .insert(marketProductsTable)
      .values(marketProducts.map((mp) => ({ ...mp, product: createdProduct.id })))
      .returning({ id: marketProductsTable.id });

    const [createdCmsProduct] = await tx
      .insert(cms_products)
      .values({
        ...cmsProduct,
        product_id: createdProduct.id.toString(),
      })
      .returning({ id: cms_products.id });

    return { createdProduct, createdMarketProducts, createdCmsProduct };
  });

  return ret;
};
