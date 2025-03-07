import { z } from 'zod';

import { api } from '../api';

type Params = {
  sku: string;
};

const buildUrl = ({ sku }: Params) => {
  return `/products/${sku}` as const;
};

const responseSchema = z.object({
  id: z.number(),
  sku: z.string(),
  name: z.string(),
  description: z.string(),
});

export const getProductBySku = (params: Params) => {
  return api.get(buildUrl(params), responseSchema);
};
