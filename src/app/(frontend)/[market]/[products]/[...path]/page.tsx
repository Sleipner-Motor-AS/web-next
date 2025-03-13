import { getCms } from '@/cms';
import { getDictionary } from '@/dictionaries';
import { markets } from '@/markets';
import type { MarketCode } from '@/markets';

type Params = {
  market: MarketCode;
  products: string;
  path: string[];
};

export async function generateStaticParams(): Promise<Params[]> {
  const cms = await getCms();

  const { docs: categories } = await cms.find({
    collection: 'cms_product_categories',
    limit: 1000, // TODO: Find more elegant way to do this
  });

  const allParams: Params[] = [];

  for (const category of categories) {
    for (const market of markets) {
      const marketCategory = category[market.code];

      if (!marketCategory) {
        continue;
      }

      const split = marketCategory.split('/');

      if (split.length === 0) {
        continue;
      }

      const params: Params = {
        market: market.code,
        products: 'products',
        path: split,
      };

      allParams.push(params);
    }
  }

  return allParams;
}

type Props = {
  params: Promise<Params>;
};

export default async function ProductsCategoriesPage({ params }: Props) {
  const { market, products, path } = await params;

  return (
    <div>
      CATEGORY PAGE
      <br />
      {market} {path.join(' / ')}
    </div>
  );
}
