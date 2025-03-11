import { connect } from '@/db';
import { eq } from '@/db/orm';

import { marketProductsTable, productsTable } from '@/db/schemas/product';

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
