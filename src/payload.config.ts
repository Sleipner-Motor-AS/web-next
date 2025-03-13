import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import { env } from '@/env';

import { Users } from './cms/collections/Users';
import { Media } from './cms/collections/Media';
import { Products } from './cms/collections/Products';

import { customerProductPricesTable, customersTable } from './db/tables/customer';
import { marketProductsTable, productsTable } from './db/tables/product';
import { markets } from './markets';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  // Add new collections here
  collections: [Users, Media, Products],
  // Add new db tables here
  db: postgresAdapter({
    pool: { connectionString: env.secret.databaseUrl },
    disableCreateDatabase: true,
    beforeSchemaInit: [
      ({ schema }) => {
        return {
          ...schema,
          tables: {
            ...schema.tables,
            customersTable,
            productsTable,
            marketProductsTable,
            customerProductPricesTable,
          },
        };
      },
    ],
  }),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        products: {
          Component: '/features/admin-products/views/add-product-view#AddProductView',
          path: '/add-product',
        },
      },
    },
  },
  editor: lexicalEditor(),
  secret: env.secret.payload.secret,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  localization: {
    defaultLocale: markets[0].code,
    locales: [
      ...markets.map((market) => ({
        label: market.label,
        code: market.code,
      })),
    ],
  },
});
