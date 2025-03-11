import config from '@payload-config';
import { getPayload } from 'payload';

import { customerProductPricesTable, customersTable } from './customer';
import { marketProductsTable, productsTable } from './product';

/**
 * Do db operations using dizzle select api.
 * @docs https://orm.drizzle.team/docs/select
 */
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
