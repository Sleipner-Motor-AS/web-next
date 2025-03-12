import { getDb } from '@/db';
import { eq } from '@/db/orm';

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

    const updatedProduct = await tx
      .update(productsTable)
      .set({
        cms_product: createdCmsProduct.id,
      })
      .where(eq(productsTable.id, createdProduct.id))
      .returning({ id: productsTable.id });

    return { createdProduct, createdMarketProducts, createdCmsProduct: updatedProduct };
  });

  return ret;
};
