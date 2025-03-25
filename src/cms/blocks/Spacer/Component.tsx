import type { SpacerBlock } from '@/payload-types';

type SpacerBlockComponentProps = SpacerBlock;

const heightClasses = {
  small: 'h-10',
  medium: 'h-20',
  large: 'h-30',
} as const;

export const SpacerBlockComponent = ({ height = 'medium' }: SpacerBlockComponentProps) => {
  return <div className={heightClasses[height as keyof typeof heightClasses]} />;
};
