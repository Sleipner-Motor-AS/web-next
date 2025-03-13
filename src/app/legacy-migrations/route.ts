import { migrateProductCategories } from '@/legacy-migrations/migrate-product-categories';

export const GET = async () => {
  await migrateProductCategories();
  return Response.json({ message: 'Product categories migrated' });
};
