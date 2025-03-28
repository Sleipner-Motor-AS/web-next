import type { Block } from 'payload';

export const RichTextBlockConfig: Block = {
  slug: 'richText',
  imageURL: '/blocks/rich-text.png',
  interfaceName: 'RichTextBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'width',
      type: 'select',
      options: [
        { label: 'Wide', value: 'wide' },
        { label: 'Medium', value: 'medium' },
        { label: 'Narrow', value: 'narrow' },
      ],
      defaultValue: 'medium',
    },
  ],
};
