import type { Block } from 'payload';

export const RelatedBlockConfig: Block = {
  slug: 'related',
  imageURL: '/blocks/related.png',
  interfaceName: 'RelatedBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'related',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'cms_media',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: ['content_pages', 'cms_products'],
          required: true,
        },
      ],
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Dark', value: 'dark' },
        { label: 'Light', value: 'light' },
        { label: 'White', value: 'white' },
      ],
      defaultValue: 'light',
    },
  ],
};
