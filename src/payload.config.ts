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

import { customerProductPricesTable, customersTable } from './db/tables/customer';
import { marketProductsTable, productsTable } from './db/tables/product';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: env.secret.payload.secret,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
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
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
});
