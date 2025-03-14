import type { HeroBlock } from '@/payload-types';

import { Hero } from '@/components/ui/hero';

type HeroBlockComponentProps = HeroBlock;

export const HeroBlockComponent = ({
  color,
  imagePlacement,
  squareImage,
  fullWidth,
  imageFade,
  image,
  title,
  text,
  link,
  textLink,
}: HeroBlockComponentProps) => {
  // TODO: Pass props
  return (
    <Hero
      color={color ?? undefined}
      imagePlacement={imagePlacement ?? undefined}
      squareImage={squareImage ?? false}
      fullWidth={fullWidth ?? false}
      imageFade={imageFade ?? false}
      // image={image ?? undefined}
      title={title ?? undefined}
      text={text ?? undefined}
      // link={link ?? undefined}
      // textLink={textLink ?? undefined}
    />
  );
};
