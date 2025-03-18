import { Submenu } from '@/components/ui/submenu';
import type { SubmenuBlock } from '@/payload-types';

type SubmenuBlockComponentProps = SubmenuBlock;

export const SubmenuBlockComponent = ({ color, links }: SubmenuBlockComponentProps) => {
  // If no links are provided, return null
  if (!links || links.length === 0) {
    return null;
  }

  // Transform the links data to the format expected by the Submenu component
  const transformedLinks = links.map((link) => ({
    url: link.url || '',
    text: link.text || '',
    description: link.description || '',
  }));

  return <Submenu color={color ?? undefined} links={transformedLinks} />;
};
