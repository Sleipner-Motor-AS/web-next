import { eq } from '@payloadcms/db-postgres/drizzle';

import { connect } from '@/db';

import { marketProductsTable, productsTable } from '@/db/product';

export async function getMarketProducts() {
  const db = await connect();

  const ret = await db
    .select({
      product: productsTable,
      marketProduct: marketProductsTable,
    })
    .from(marketProductsTable)
    .innerJoin(productsTable, eq(marketProductsTable.product, productsTable.id));

  return ret;
}
