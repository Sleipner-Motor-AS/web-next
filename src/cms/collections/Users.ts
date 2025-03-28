import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'cms_users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
