import type { CollectionConfig, Field } from 'payload';

import { markets } from '@/markets';

import { getDb } from '@/db';
import { eq, inArray } from '@/db/orm';

import { productsTable } from '@/db/tables/product';
import type { CmsProductCategory, CmsProductCategoryGroup } from '@/payload-types';
import { cms_product_category_groups } from '@/payload-generated-schema';

export const Products: CollectionConfig = {
  slug: 'cms_products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  access: {
    create: () => false,
  },
  admin: {
    useAsTitle: 'sku',
    listSearchableFields: ['sku'],
    components: {
      Description: {
        path: '/features/admin-products/components/go-to-add-product-link#GoToAddProductLink',
      },
    },
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
            // TODO: Get from db
            return 'TEST_VIRTUAL_FIELD';
          },
        ],
      },
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'cms_product_categories',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'sub_header',
      label: 'Sub Header',
      type: 'ui',
      admin: {
        disableBulkEdit: true,
        disableListColumn: true,
        components: {
          Field: {
            path: '/features/admin-products/components/product-description-sub-header#ProductDescriptionSubHeader',
          },
        },
      },
    },
    ...markets.map((market) => {
      return {
        name: `description_${market.code}`,
        label: `Description - ${market.label}`,
        type: 'textarea',
        admin: {
          disableListColumn: true,
          disableBulkEdit: true,
          disableListFilter: true,
        },
      } satisfies Field;
    }),
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

export const ProductCategories: CollectionConfig = {
  slug: 'cms_product_categories',
  admin: {
    useAsTitle: 'category',
  },
  labels: {
    singular: 'Product Category',
    plural: 'Product Categories',
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
  hooks: {
    afterChange: [
      async ({ doc: _doc }) => {
        const doc = _doc as CmsProductCategory;

        const parts = doc.category.split('/');

        parts.pop();

        const groupPaths: string[] = [];

        for (const [i] of parts.entries()) {
          groupPaths.push(parts.slice(0, i + 1).join('/'));
        }

        const db = await getDb();

        const existingGroups = await db
          .select()
          .from(cms_product_category_groups)
          .where(inArray(cms_product_category_groups.path, groupPaths));

        const groups: CmsProductCategoryGroup[] = existingGroups;

        for (const groupPath of groupPaths) {
          if (!existingGroups.find((group) => group.path === groupPath)) {
            const [created] = await db.insert(cms_product_category_groups).values({ path: groupPath }).returning();
            groups.push(created);
          }
        }

        for (const group of groups) {
          const parentPath = group.path.split('/').slice(0, -1).join('/');
          const parent = groups.find((g) => g.path === parentPath);
          if (parent) {
            await db
              .update(cms_product_category_groups)
              .set({ parent: parent.id })
              .where(eq(cms_product_category_groups.id, group.id));
          }
        }
      },
    ],
  },
};

export const ProductCategoryGroups: CollectionConfig = {
  slug: 'cms_product_category_groups',
  admin: {
    useAsTitle: 'path',
  },
  labels: {
    singular: 'Product Category Group',
    plural: 'Product Category Groups',
  },
  fields: [
    {
      name: 'path',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'cms_product_category_groups',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
