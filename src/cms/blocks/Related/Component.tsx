import { Card } from '@/components/ui/card';
import type { RelatedBlock } from '@/payload-types';
import { cn } from '@/lib/utils';

type RelatedBlockComponentProps = RelatedBlock;

export const RelatedBlockComponent = ({ title, description, related, color }: RelatedBlockComponentProps) => {
  if (!related || related.length === 0) {
    return null;
  }

  const transformedRelated = related.map((item) => ({
    image:
      item.image && typeof item.image !== 'number'
        ? {
            src: item.image.url || '',
            altText: item.image.alt || '',
          }
        : undefined,
    title: item.title || '',
    description: item.description || '',
    link: {
      target: typeof item.page?.value === 'object' && 'slug' in item.page.value ? `/${item.page.value.slug}` : '',
      title: 'Read more',
    },
  }));

  const partColor = {
    dark: 'bg-petroleum-700 text-white',
    light: 'bg-petroleum-25 text-petroleum-700',
    white: 'bg-white text-petroleum-700',
  } as const;

  const cardColor = {
    light: 'white',
    white: 'light',
    dark: 'light',
  } as const;

  return (
    <div className={cn('w-full pt-16 pb-24', partColor[color as keyof typeof partColor])}>
      <div className="mx-auto w-full max-w-screen-xl px-5 md:px-10 xl:px-12">
        {(title || description) && (
          <div className="mb-12 flex flex-col gap-4">
            {title && <h2 className="text-3xl font-medium">{title}</h2>}
            {description && <p className="text-xl">{description}</p>}
          </div>
        )}
        <div
          className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
            'lg:grid-cols-2': related.length >= 2,
            'lg:grid-cols-3': related.length >= 3,
          })}
        >
          {transformedRelated.map((item) => (
            <Card
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
              link={item.link}
              color={cardColor[color as keyof typeof cardColor]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
