import { getCms } from '@/cms';

/**
 * Get the db instance and do operations using dizzle select api.
 * @doc https://orm.drizzle.team/docs/select
 */
export const getDb = async () => {
  const payload = await getCms();
  return payload.db.drizzle;
};
