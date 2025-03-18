import type { Block } from 'payload';

export const SubmenuBlockConfig: Block = {
  slug: 'submenu',
  interfaceName: 'SubmenuBlock',
  fields: [
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
    {
      name: 'links',
      type: 'array',
      label: 'Submenu Links',
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Link Text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
};
