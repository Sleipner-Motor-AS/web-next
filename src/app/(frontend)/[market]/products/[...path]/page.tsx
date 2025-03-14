import { getCms } from '@/cms';
import { markets } from '@/markets';
import type { MarketCode } from '@/markets';

type Params = {
  market: MarketCode;
  //products: string;
  path: string[];
};

export async function generateStaticParams(): Promise<Params[]> {
  const cms = await getCms();

  const allParams: Params[] = [];

  const { docs: products } = await cms.find({
    collection: 'cms_products',
    limit: 1000,
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
        //products: 'products',
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
  const { market, path } = await params;

  const cms = await getCms();

  const { docs: products } = await cms.find({
    collection: 'cms_products',
    where: {
      sku: {
        equals: path[path.length - 1],
      },
    },
  });

  if (products.length > 0) {
    return <div>ProductPage</div>;
  }

  const { docs: groups } = await cms.find({
    collection: 'cms_product_category_groups',
    where: {
      path: {
        equals: path.join('/'),
      },
    },
  });

  if (groups.length > 0) {
    return <div>CategoryPage</div>;
  }

  return <div>404</div>;
}
