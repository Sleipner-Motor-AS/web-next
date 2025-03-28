import type { Block } from 'payload';

export const SubmenuBlockConfig: Block = {
  slug: 'submenu',
  imageURL: '/blocks/submenu.png',
  interfaceName: 'SubmenuBlock',
  fields: [
    {
      name: 'links',
      type: 'array',
      label: 'Submenu links',
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
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
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
