import type { Block } from 'payload';

export const HeroBlockConfig: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
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
      name: 'imagePlacement',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Behind', value: 'behind' },
      ],
      defaultValue: 'left',
    },
    {
      name: 'squareImage',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'fullWidth',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'imageFade',
      type: 'checkbox',
      defaultValue: false,
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'cms_media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'text',
      type: 'textarea',
    },
    {
      name: 'link',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'target',
          type: 'text',
        },
      ],
    },
    {
      name: 'textLink',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'target',
          type: 'text',
        },
      ],
    },
  ],
};
