import { getProductBySku, type GetProductsBySku } from '@/integrations/odin/products/get-product-by-sku';

type CreateServiceParams = {
  getProductBySku: GetProductsBySku;
};

type GetOdinProductParams = {
  sku: string;
};

export const createService = (deps: CreateServiceParams) => async (params: GetOdinProductParams) => {
  const product = await deps.getProductBySku({ sku: params.sku });
  return product;
};

export const getOdinProduct = createService({ getProductBySku });
