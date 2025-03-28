import type { Block } from 'payload';

export const IntroBlockConfig: Block = {
  slug: 'intro',
  imageURL: '/blocks/intro.png',
  interfaceName: 'IntroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
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
      name: 'width',
      type: 'select',
      options: [
        { label: 'Wide', value: 'wide' },
        { label: 'Medium', value: 'medium' },
        { label: 'Narrow', value: 'narrow' },
      ],
      defaultValue: 'wide',
    },
  ],
};
