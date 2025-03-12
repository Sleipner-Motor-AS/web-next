import config from '@payload-config';
import { getPayload } from 'payload';

/**
 * Get the cms/payload instance and do operations using payloads local api.
 * @doc https://payloadcms.com/docs/local-api/overview
 */
export const getCms = async () => {
  const payload = await getPayload({ config });
  return payload;
};
