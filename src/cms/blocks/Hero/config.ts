import { Block } from 'payload';

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Blank', value: 'blank' },
        { label: 'Dark', value: 'dark' },
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
      type: 'group',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'cms_media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
        },
      ],
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
