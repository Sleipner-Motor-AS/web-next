import type { Block } from 'payload';

export const HeroBlockConfig: Block = {
  slug: 'hero',
  imageURL: '/blocks/hero.png',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'text',
      type: 'textarea',
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
    {
      name: 'fullWidth',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'cms_media',
        },
        {
          name: 'placement',
          type: 'select',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
            { label: 'Behind', value: 'behind' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'fade',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Image will fade from selected color to image.',
          },
        },
        {
          name: 'square',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Image will be displayed as a square, for use with product images.',
          },
        },
      ],
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
