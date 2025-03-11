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
          Component: '/features/admin-products/views/admin-products#AdminProducts',
          path: '/products',
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
});
