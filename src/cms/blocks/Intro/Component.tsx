import { Intro } from '@/components/ui/intro';
import type { IntroBlock } from '@/payload-types';

type IntroBlockComponentProps = IntroBlock;

export const IntroBlockComponent = ({ title, description, color }: IntroBlockComponentProps) => {
  return <Intro title={title ?? undefined} description={description ?? undefined} color={color ?? undefined} />;
};
