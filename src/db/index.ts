import config from '@payload-config';
import { getPayload } from 'payload';

import { customerProductPricesTable, customersTable } from './customer';
import { marketProductsTable, productsTable } from './product';

export const connect = async () => {
  const payload = await getPayload({ config });
  return payload.db.drizzle;
};

export const dbTables = {
  customersTable,
  productsTable,
  marketProductsTable,
  customerProductPricesTable,
  // Always add new tables here..
};
