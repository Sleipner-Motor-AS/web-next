import type { MarketCode } from '@/markets';

import { getDb } from '@/db';
import { eq } from '@/db/orm';

import { marketProductsTable, productsTable } from '@/db/tables/product';

type GetMarketProductsInput = {
  market: MarketCode;
};

export async function getMarketProducts({ market }: GetMarketProductsInput) {
  const db = await getDb();

  const ret = await db
    .select({
      product: productsTable,
      marketProduct: marketProductsTable,
    })
    .from(marketProductsTable)
    .where(eq(marketProductsTable.market, market))
    .innerJoin(productsTable, eq(marketProductsTable.product, productsTable.id));

  return ret;
}
