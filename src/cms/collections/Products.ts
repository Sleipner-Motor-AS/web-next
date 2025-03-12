import type { CollectionConfig, Field } from 'payload';

import { markets } from '@/markets';

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
      hidden: true,
      unique: true,
      admin: {
        disableListColumn: true,
        disableBulkEdit: true,
        disableListFilter: true,
      },
    },
    {
      name: 'sku',
      label: 'SKU',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    ...(markets.map((market) => ({
      name: `description_${market.code}`,
      label: `Description - ${market.label}`,
      type: 'textarea',
      admin: {
        disableListColumn: true,
        disableBulkEdit: true,
        disableListFilter: true,
      },
    })) satisfies Field[]),
    // Virtual fields
    {
      virtual: true,
      name: 'sku2',
      label: 'SKU2',
      type: 'text',
      admin: {
        position: 'sidebar',
        readOnly: true,
        disableListColumn: true,
        disableBulkEdit: true,
        disableListFilter: true,
      },
      hooks: {
        afterRead: [
          () => {
            return 'TEST_VIRTUAL_FIELD';
          },
        ],
      },
    },
  ],
  hooks: {
    afterDelete: [
      async ({ doc }) => {
        const db = await getDb();
        await db.delete(productsTable).where(eq(productsTable.cms_product, doc.id));
      },
    ],
    afterRead: [
      async ({ doc }) => {
        console.log(doc);
      },
    ],
  },
  admin: {
    useAsTitle: 'sku',
    listSearchableFields: ['sku'],
  },
};
