'use server';

import type { GetOdinProductActionReturn } from './get-product-by-sku';

import { marketCodes } from '@/markets';

import { createProduct } from '../repository';

type CreateActionParams = {
  createProduct: typeof createProduct;
};

type CreateProductParams = {
  odinProduct: GetOdinProductActionReturn;
};

const createAction = (deps: CreateActionParams) => async (params: CreateProductParams) => {
  const { createProduct } = deps;

  const { en } = params.odinProduct;

  if (!en) {
    throw new Error('Missing English product info');
  }

  const created = await createProduct({
    product: {
      odin_id: en.id,
      sku: en.sku,
      sku2: en.sku_2,
    },
    marketProducts: marketCodes.map((market) => {
      return {
        market,
      };
    }),
    cmsProduct: {
      sku: en.sku,
    },
  });

  return created;
};

export async function createProductAction(params: CreateProductParams) {
  return createAction({ createProduct })(params);
}
