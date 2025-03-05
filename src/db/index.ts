import { drizzle } from 'drizzle-orm/node-postgres';

import { env } from '@/env';

const db = drizzle(env.secret.databaseUrl);

export default db;
