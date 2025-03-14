'use server';

import { getProductBySku } from '@/integrations/odin/products/get-product-by-sku';

type CreateActionParams = {
  getProductBySku: typeof getProductBySku;
};

type GetOdinProductParams = {
  sku: string;
};

const createAction = (deps: CreateActionParams) => async (params: GetOdinProductParams) => {
  const res = await deps.getProductBySku({ sku: params.sku });
  return res;
};

export async function getOdinProductAction(params: GetOdinProductParams) {
  return createAction({ getProductBySku })(params);
}

export type GetOdinProductActionReturn = Awaited<ReturnType<typeof getOdinProductAction>>;
