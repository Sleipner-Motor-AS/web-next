import type { CollectionConfig, Field } from 'payload';

import { markets } from '@/markets';

export const Categories: CollectionConfig = {
  slug: 'cms_product_categories',

  admin: {
    useAsTitle: 'category',
  },
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  fields: [
    {
      name: 'category',
      type: 'text',
      required: true,
      unique: true,
    },
    ...markets.map((market) => {
      return {
        name: market.code,
        label: market.label,
        type: 'text',
      } satisfies Field;
    }),
  ],
};
