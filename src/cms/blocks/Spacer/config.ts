import type { Block } from 'payload';

export const SpacerBlockConfig: Block = {
  slug: 'spacer',
  imageURL: '/blocks/spacer.png',
  interfaceName: 'SpacerBlock',
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Height',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      defaultValue: 'medium',
    },
  ],
};
