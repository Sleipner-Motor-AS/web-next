import type { RichTextBlock } from '@/payload-types';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { cn } from '@/lib/utils';

type RichTextBlockComponentProps = RichTextBlock;

const widthClasses = {
  wide: 'max-w-screen-xl',
  medium: 'max-w-screen-lg',
  narrow: 'max-w-screen-md',
} as const;

export const RichTextBlockComponent = ({ content, width = 'medium' }: RichTextBlockComponentProps) => {
  if (!content) return null;

  return (
    <div
      className={cn('prose mx-auto w-full px-5 md:px-10 xl:px-12', widthClasses[width as keyof typeof widthClasses])}
    >
      <RichText data={content} />
    </div>
  );
};
