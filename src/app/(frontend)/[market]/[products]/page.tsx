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
      products: (await getDictionary(market.language)).products.toLowerCase(),
    })),
  );
}

type Props = {
  params: Promise<Params>;
};

export default async function ProductsPage({ params }: Props) {
  const { market } = await params;

  return (
    <div>
      ROOT PRODUCTS PAGE
      <br />
      {market}
    </div>
  );
}
