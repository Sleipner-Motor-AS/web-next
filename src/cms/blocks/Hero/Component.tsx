import type { HeroBlock } from '@/payload-types';

import { Hero } from '@/components/ui/hero';

type HeroBlockComponentProps = HeroBlock;

export const HeroBlockComponent = ({}: HeroBlockComponentProps) => {
  // TODO: Pass props
  return <Hero />;
};
