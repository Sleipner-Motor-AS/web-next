import { Card } from '@/components/ui/card';
import type { RelatedBlock } from '@/payload-types';

type RelatedBlockComponentProps = RelatedBlock;

export const RelatedBlockComponent = ({ title, description, related, color }: RelatedBlockComponentProps) => {
  if (!related || related.length === 0) {
    return null;
  }

  const transformedRelated = related.map((item) => ({
    title: item.title || '',
    description: item.description || '',
    url: item.url || '',
  }));

  return (
    <div className="container mx-auto">
      {title && <h2 className="text-2xl font-bold">{title}</h2>}
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {transformedRelated.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            link={{ target: item.url }}
            color={color ?? undefined}
          />
        ))}
      </div>
    </div>
  );
};
