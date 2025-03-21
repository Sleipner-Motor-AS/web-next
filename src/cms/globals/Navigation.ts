import type { GlobalConfig } from 'payload';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'content_pages',
          required: true,
        },
      ],
    },
  ],
};
