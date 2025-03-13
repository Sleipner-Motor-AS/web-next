import type { CollectionConfig, Field } from 'payload';

import { markets } from '@/markets';

export const Categories: CollectionConfig = {
  slug: 'cms_product_categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  fields: [
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    ...markets.map((market) => {
      return {
        name: `${market.code}`,
        label: `${market.label}`,
        type: 'text',
      } satisfies Field;
    }),
  ],
};
