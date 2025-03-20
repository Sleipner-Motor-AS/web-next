import type { HeroBlock } from '@/payload-types';
import { Hero } from '@/components/ui/hero';

type HeroBlockComponentProps = HeroBlock;

export const HeroBlockComponent = ({
  color,
  fullWidth,
  image,
  title,
  text,
  link,
  textLink,
}: HeroBlockComponentProps) => {
  // Transform the image data to the format expected by the Hero component
  const transformedImage =
    image?.media && typeof image.media !== 'number'
      ? {
          src: image.media.url || '',
          altText: image.media.alt || '',
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
      imagePlacement={image?.placement ?? undefined}
      squareImage={image?.square ?? false}
      fullWidth={fullWidth ?? false}
      imageFade={image?.fade ?? false}
      image={transformedImage}
      title={title ?? undefined}
      text={text ?? undefined}
      link={transformedLink}
      textLink={transformedTextLink}
    />
  );
};
