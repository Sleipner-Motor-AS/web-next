'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ContentPage } from '@/payload-types';
import type { MarketCode } from '@/markets';

type NavigationItem = {
  title: string;
  page: number | ContentPage;
};

type NavigationLinksProps = {
  market: MarketCode;
  items: NavigationItem[];
};

export function NavigationLinks({ market, items }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex gap-10 font-medium">
      {items.map((item) => {
        const page = typeof item.page === 'number' ? null : item.page;
        if (!page) return null;

        const href = `/${market}/${page.localizedSlug}`;
        return (
          <li key={page.id}>
            <Link href={href} className={pathname === href ? 'underline' : ''}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
