'use server';

import { marketCodes } from '@/markets';

import { cms_products } from '@/payload-generated-schema';

import { marketProductsTable, productsTable } from '@/db/tables/product';

import { createProduct } from '../repository';

type CreateActionParams = {
  createProduct: typeof createProduct;
};

type CreateProductParams = {
  name: string;
  sku: string;
  sku2: string;
};

const createAction = (deps: CreateActionParams) => async (params: CreateProductParams) => {
  const { createProduct } = deps;

  const product: typeof productsTable.$inferInsert = {
    odin_id: 0,
    name: params.name,
    sku: params.sku,
    sku2: params.sku2,
  };

  const marketProducts: (typeof marketProductsTable.$inferInsert)[] = marketCodes.map((market) => {
    return {
      market,
    };
  });

  const cmsProduct: typeof cms_products.$inferInsert = {};

  const created = await createProduct({
    product,
    marketProducts,
    cmsProduct,
  });

  return created;
};

export async function createProductAction(params: CreateProductParams) {
  return createAction({ createProduct })(params);
}
