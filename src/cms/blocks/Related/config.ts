import type { Block } from 'payload';

export const RelatedBlockConfig: Block = {
  slug: 'related',
  imageURL: '/blocks/related.png',
  interfaceName: 'RelatedBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'related',
      type: 'array',
      label: 'Related ',
      minRows: 1,
      maxRows: 3,
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
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
