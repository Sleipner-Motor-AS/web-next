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

  const { docs: products } = await cms.find({
    collection: 'cms_products',
    limit: 1000, // TODO: Find more elegant way to do this
  });

  for (const product of products) {
    if (!product.category) {
      continue;
    }

    const category = product.category;
    if (!category || typeof category === 'number') {
      continue;
    }

    for (const market of markets) {
      const marketCategory = category[market.code];
      if (!marketCategory) {
        continue;
      }

      const categoryPath = marketCategory.split('/');
      if (categoryPath.length === 0) {
        continue;
      }

      allParams.push({
        market: market.code,
        products: 'products',
        path: [...categoryPath, product.sku],
      });
    }
  }

  return allParams;
}

type Props = {
  params: Promise<Params>;
};

export default async function ProductsCategoriesPage({ params }: Props) {
  const { market, products, path } = await params;

  const cms = await getCms();

  // Check if the last segment matches a product SKU
  const { docs: matchingProducts } = await cms.find({
    collection: 'cms_products',
    where: {
      sku: {
        equals: path[path.length - 1],
      },
    },
  });

  const isProduct = matchingProducts.length > 0;

  return (
    <div>
      {isProduct ? (
        <div>
          PRODUCT PAGE
          <br />
          {market} {path.join(' / ')}
        </div>
      ) : (
        <div>
          CATEGORY PAGE
          <br />
          {market} {path.join(' / ')}
        </div>
      )}
    </div>
  );
}
