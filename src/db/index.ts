import config from '@payload-config';
import { getPayload } from 'payload';

/**
 * Do db operations using dizzle select api.
 * @docs https://orm.drizzle.team/docs/select
 */
export const connect = async () => {
  const payload = await getPayload({ config });
  return payload.db.drizzle;
};
