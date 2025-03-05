import { markets } from '@/markets';

export const dynamicParams = false;

type Params = {
  locale: string;
  shop: string;
};

export async function generateStaticParams() {
  return markets.map((market) => ({
    locale: market.language,
    shop: market.language,
  }));
}

type Props = {
  params: Promise<Params>;
};

export default async function ShopPage({ params }: Props) {
  const { locale, shop } = await params;

  return (
    <div>
      Shop Page {locale} {shop}
    </div>
  );
}
