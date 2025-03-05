import { type MarketCode, markets } from '@/markets';

import { getDictionary } from '@/dictionaries';

export const dynamicParams = false;

type Params = {
  market: MarketCode;
  products: string;
};

export async function generateStaticParams(): Promise<Params[]> {
  return Promise.all(
    markets.map(async (market) => ({
      market: market.code,
      products: (await getDictionary(market.language)).products,
    })),
  );
}

type Props = {
  params: Promise<Params>;
};

export default async function ShopPage({ params }: Props) {
  const { market, products } = await params;

  return (
    <div>
      Products Page {market} {products}
    </div>
  );
}
