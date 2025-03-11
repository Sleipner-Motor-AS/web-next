import { z } from 'zod';

import { api } from '../api';

export type GetProductBySkuParams = {
  sku: string;
};

const buildUrl = ({ sku }: GetProductBySkuParams) => {
  return `/web/products/sku/${sku}` as const;
};

const responseSchema = z.object({
  id: z.number(),
  sku: z.string(),
  name: z.string(),
  description: z.string(),
});

export const getProductBySku = (params: GetProductBySkuParams) => {
  return api.get(buildUrl(params), responseSchema);
};

export type GetProductBySkuReturn = Awaited<ReturnType<typeof getProductBySku>>;

export type GetProductsBySku = (params: GetProductBySkuParams) => Promise<GetProductBySkuReturn>;
