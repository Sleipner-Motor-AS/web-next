import type { ReactNode } from 'react';

import { Topnav } from '@/components/layout/topnav';
import { Navigation } from '@/components/layout/navigation';
import { Breadcrumb } from '@/components/layout/breadcrumb';
import { Footer } from '@/components/layout/footer';
import type { MarketCode } from '@/markets';

type Props = {
  children: ReactNode;
  params: {
    market: MarketCode;
  };
};

export default async function MarketLayout({ children, params }: Props) {
  const { market } = await params;

  return (
    <>
      <Topnav />
      <Navigation market={market} />
      <Breadcrumb />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
