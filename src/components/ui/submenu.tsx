import { cn } from '@/lib/utils';
import { Textlink } from '@/components/ui/textlink';

type SubmenuLink = {
  url: string;
  text: string;
  description: string;
};

type SubmenuProps = {
  color?: 'dark' | 'light' | 'white';
  links: SubmenuLink[];
  className?: string;
};

export function Submenu({ color = 'light', links, className }: SubmenuProps) {
  // Ensure we have at least 1 and at most 6 links
  const validLinks = links.slice(0, 6);

  if (validLinks.length === 0) {
    return null;
  }

  const submenuClasses = cn(
    'w-full border-b',
    {
      'bg-petroleum-700 text-white border-petroleum-600': color === 'dark',
      'bg-petroleum-25 text-petroleum-700 border-petroleum-100': color === 'light',
      'bg-white text-petroleum-700 border-petroleum-50': color === 'white',
    },
    className,
  );

  return (
    <div className={submenuClasses}>
      <div className="mx-auto flex max-w-screen-xl flex-wrap gap-10 px-5 pt-14 pb-16 md:px-10 xl:px-12">
        {validLinks.map((link, index) => (
          <div key={index} className="min-w-[200px] flex-1">
            <Textlink href={link.url} color={color === 'dark' ? 'white' : 'petroleum'}>
              {link.text}
            </Textlink>
            <div className="mt-2 text-sm">{link.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
