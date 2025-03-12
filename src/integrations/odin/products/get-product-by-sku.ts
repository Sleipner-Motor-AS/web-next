import { z } from 'zod';

import { marketCodes } from '@/markets';

import { api } from '../api';

export type GetProductBySkuParams = {
  sku: string;
};

const buildUrl = ({ sku }: GetProductBySkuParams) => {
  return `/web/products/sku/${sku}` as const;
};

const responseSchema = z.record(
  z.enum(marketCodes),
  z.object({
    id: z.number(),
    sku: z.string(),
    sku_2: z.string(),
    subheader: z.string(),
  }),
);

export const getProductBySku = (params: GetProductBySkuParams) => {
  return api.get(buildUrl(params), responseSchema);
};
