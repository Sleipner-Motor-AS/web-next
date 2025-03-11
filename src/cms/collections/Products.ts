import type { CollectionConfig } from 'payload';

import { getDb } from '@/db';
import { eq } from '@/db/orm';

import { productsTable } from '@/db/tables/product';

export const Products: CollectionConfig = {
  slug: 'cms_products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  access: {
    create: () => false,
  },
  fields: [
    {
      name: 'product_id',
      type: 'number',
      admin: {
        description: 'ID of the related product in the database',
        readOnly: true,
      },
      unique: true,
    },
  ],
  hooks: {
    afterDelete: [
      async ({ doc }) => {
        const db = await getDb();
        await db.delete(productsTable).where(eq(productsTable.cms_product, doc.id));
      },
    ],
  },
};
