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
  // Transform the image data to the format expected by the Hero component
  const transformedImage =
    image && typeof image !== 'number'
      ? {
          src: image.url || '',
          altText: image.alt || '',
        }
      : undefined;

  // Transform link and textLink to match the LinkProps type
  const transformedLink = link
    ? {
        title: link.title || undefined,
        target: link.target || undefined,
      }
    : undefined;

  const transformedTextLink = textLink
    ? {
        title: textLink.title || undefined,
        target: textLink.target || undefined,
      }
    : undefined;

  return (
    <Hero
      color={color ?? undefined}
      imagePlacement={imagePlacement ?? undefined}
      squareImage={squareImage ?? false}
      fullWidth={fullWidth ?? false}
      imageFade={imageFade ?? false}
      image={transformedImage}
      title={title ?? undefined}
      text={text ?? undefined}
      link={transformedLink}
      textLink={transformedTextLink}
    />
  );
};
