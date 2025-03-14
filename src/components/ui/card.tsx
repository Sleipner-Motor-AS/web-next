import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Textlink } from './textlink';
import type { ReactNode } from 'react';

type CardProps = {
  className?: string;
  color?: 'dark' | 'light' | 'white';
  image?: {
    src?: string;
    alt?: string;
  };
  title?: string;
  link?: {
    target?: string;
    title?: string;
  };
  children?: ReactNode;
};

export const Card = ({ title, image, color = 'light', link, children }: CardProps) => {
  const cardClasses = cn('flex flex-col overflow-hidden rounded-xl border', {
    'bg-petroleum-700 border-petroleum-500 text-white': color === 'dark',
    'bg-petroleum-25 border-petroleum-100 text-petroleum-700': color === 'light',
    'bg-white border-petroleum-100 text-petroleum-700': color === 'white',
  });
  return (
    <div className={cardClasses}>
      {image && (
        <Image
          src={image.src || ''}
          alt={image.alt || ''}
          width={500}
          height={500}
          className="max-h-72 w-full object-cover"
        />
      )}
      {title && <h2 className="px-6 pt-6 pb-2 text-xl font-medium">{title}</h2>}
      <div className="px-6 pb-6">{children}</div>
      {link && (
        <div className="mt-auto px-6 pb-6">
          <Textlink href={link.target} color={color === 'dark' ? 'white' : 'petroleum'}>
            {link.title}
          </Textlink>
        </div>
      )}
    </div>
  );
};
