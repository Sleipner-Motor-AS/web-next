import React from 'react';
import { cn } from '@/lib/utils';

type IntroProps = {
  title?: string;
  description?: string;
  color?: 'dark' | 'light' | 'white';
  width?: 'wide' | 'medium' | 'narrow';
  className?: string;
};

export function Intro({ title, description, color = 'light', className, width = 'wide' }: IntroProps) {
  const introClasses = cn(
    'w-full',
    {
      'bg-petroleum-25 text-petroleum-700': color === 'light',
      'bg-white text-petroleum-700': color === 'white',
      'bg-petroleum-700 text-white': color === 'dark',
    },
    className,
  );
  const introContainerClasses = cn('mx-auto px-5 py-12 md:px-10 xl:px-12', {
    'max-w-screen-xl': width === 'wide',
    'max-w-screen-lg': width === 'medium',
    'max-w-screen-md': width === 'narrow',
  });
  return (
    <div className={introClasses}>
      <div className={introContainerClasses}>
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
      </div>
    </div>
  );
}
