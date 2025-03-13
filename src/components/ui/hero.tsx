import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { Textlink } from './textlink';
import { Button } from './button';

type ImageProps = {
  src?: string;
  srcSet?: string;
  altText?: string;
};

type LinkProps = {
  target?: string;
  title?: string;
};

type HeroProps = {
  color?: 'light' | 'blank' | 'dark';
  imagePlacement?: 'left' | 'right' | 'behind';
  squareImage?: boolean;
  fullWidth?: boolean;
  imageFade?: boolean;
  image?: ImageProps;
  title?: string;
  text?: string;
  link?: LinkProps;
  textLink?: LinkProps;
  className?: string;
};

export function Hero({
  color = 'light',
  imagePlacement = 'left',
  squareImage = false,
  fullWidth = false,
  imageFade = false,
  image,
  title,
  text,
  link,
  textLink,
  className,
}: HeroProps) {
  // Base hero styles
  const heroClasses = cn(
    // Base styles
    'mx-auto max-w-screen-xl flex flex-col overflow-hidden w-full',

    // Responsive styles
    'md:flex-row md:max-h-[620px]',
    'xl:mt-10 xl:mb-10 xl:rounded-[40px]',

    // Color variants
    {
      'bg-petroleum-50 text-petroleum': color === 'light',
      'bg-white text-petroleum-700': color === 'blank',
      'bg-petroleum-700 text-white': color === 'dark',
    },
    // Image placement
    {
      'md:flex-row-reverse': imagePlacement === 'right',
      'relative flex-row min-h-[360px] pt-8 pb-8 md:min-h-[420px]': imagePlacement === 'behind',
    },
    // Full width
    fullWidth && 'xl:w-full xl:max-w-full xl:rounded-none xl:min-h-[28vw] xl:mt-0 xl:mb-0',

    // Blank
    {
      'outline outline-2 outline-petroleum-100':
        color === 'blank' && imagePlacement !== 'behind' && imageFade && !squareImage && !fullWidth,
      'xl:rounded-none': color === 'blank' && squareImage,
    },

    // Custom class
    className,
  );

  // Image container styles
  const imageContainerClasses = cn(
    'w-full',
    {
      // Fade styles
      relative: imageFade,

      // Image behind styles
      'absolute top-0 left-0 h-full flex justify-center items-center overflow-hidden': imagePlacement === 'behind',

      'xl:rounded-[40px] overflow-hidden':
        color === 'blank' && !imageFade && imagePlacement !== 'behind' && !squareImage,
    },
    squareImage && 'flex justify-center items-center',
  );

  // Content container styles
  const contentContainerClasses = 'w-full self-center justify-self-center';

  // Content styles
  const contentClasses = cn('mx-auto p-8', 'md:max-w-screen-sm md:p-10', 'xl:p-12', {
    'relative z-10': imagePlacement === 'behind',
    'ml-auto mr-0': fullWidth && imagePlacement === 'right',
    'ml-0 mr-auto': fullWidth && imagePlacement === 'left',
  });

  // Image styles
  const imageClasses = cn('block w-full h-full object-cover', {
    'flex-shrink-0 min-w-full min-h-full': imagePlacement === 'behind',
    'object-contain max-h-[320px] min-w-auto min-h-auto md:max-h-[420px]': squareImage,
  });

  // Fade styles
  const fadeClasses = cn({
    'absolute inset-0': imageFade,
    'bg-petroleum-700/80': color === 'dark' && imagePlacement === 'behind',
    'bg-petroleum-50/80': color === 'light' && imagePlacement === 'behind',
    'bg-white/80': color === 'blank' && imagePlacement === 'behind',
    'from-petroleum-700 to-petroleum-700/0 bg-gradient-to-l': color === 'dark' && imagePlacement === 'left',
    'from-petroleum-700 to-petroleum-700/0 bg-gradient-to-r': color === 'dark' && imagePlacement === 'right',
    'from-petroleum-50 to-petroleum-50/0 bg-gradient-to-l': color === 'light' && imagePlacement === 'left',
    'from-petroleum-50 to-petroleum-50/0 bg-gradient-to-r': color === 'light' && imagePlacement === 'right',
    'bg-gradient-to-l from-white to-white/0': color === 'blank' && imagePlacement === 'left',
    'bg-gradient-to-r from-white to-white/0': color === 'blank' && imagePlacement === 'right',
    'bg-petroleum-50/60': squareImage && color === 'light' && imagePlacement !== 'behind',
    'bg-petroleum-700/60': squareImage && color === 'dark' && imagePlacement !== 'behind',
    'bg-white/60': squareImage && color === 'blank' && imagePlacement !== 'behind',
  });

  // Title styles
  const titleClasses = cn('text-3xl leading-none font-medium m-0 mb-4 xl:text-5xl', {
    'text-petroleum-700': color === 'light' || color === 'blank',
    'text-white': color === 'dark',
  });

  // Text styles
  const textClasses = cn('text-xl leading-relaxed', {
    'text-petroleum-700': color === 'light' || color === 'blank',
    'text-white': color === 'dark',
  });

  // Links container styles
  const linkContainerClasses = cn(
    'flex flex-col items-start gap-6 mt-6',
    'sm:flex-row sm:items-center sm:gap-10',
    'md:flex-col md:items-start md:gap-6',
    'xl:mt-10 xl:flex-row xl:items-center xl:gap-10',
  );

  return (
    <div className={heroClasses}>
      {image && image.src && (
        <div className={imageContainerClasses}>
          <Image src={image.src} alt={image.altText || ''} className={imageClasses} width={4143} height={2250} />
          {imageFade && <div className={fadeClasses} />}
        </div>
      )}
      <div className={contentContainerClasses}>
        <div className={contentClasses}>
          {title && <h4 className={titleClasses}>{title}</h4>}
          {text && <p className={textClasses}>{text}</p>}
          {(link || textLink) && (
            <div className={linkContainerClasses}>
              {link && link.target && link.title && link.title.length > 0 && (
                <Button href={link.target} as={Link} variant={color === 'dark' ? 'white' : 'petroleum'}>
                  {link.title}
                </Button>
              )}
              {textLink && textLink.target && textLink.title && textLink.title.length > 0 && (
                <Textlink href={textLink.target} variant={color === 'dark' ? 'white' : 'petroleum'}>
                  {textLink.title}
                </Textlink>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
