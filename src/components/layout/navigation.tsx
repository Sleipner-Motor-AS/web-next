import Image from 'next/image';
import Link from 'next/link';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { MarketCode } from '@/markets';
import { NavigationLinks } from './navigation-links';
import { Search } from '../ui/search';

async function getNavigation() {
  const payload = await getPayload({ config });
  return payload.findGlobal({
    slug: 'navigation',
  });
}

export async function Navigation({ market }: { market: MarketCode }) {
  const navigation = await getNavigation();

  return (
    <header className="border-petroleum-50 w-full border-b bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-5 py-6 md:px-10 xl:px-12">
        <Link href={`/${market}`} className="w-20 flex-shrink-0">
          <Image src="/sleipner-logo.svg" alt="Sleipner Logo" width={80} height={41} />
        </Link>
        <div className="ml-auto flex items-center gap-10">
          <nav>
            <NavigationLinks market={market} items={navigation.items || []} />
          </nav>
          <Search />
        </div>
      </div>
    </header>
  );
}
