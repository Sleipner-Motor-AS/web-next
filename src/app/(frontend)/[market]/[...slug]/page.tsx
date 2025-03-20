import { draftMode } from 'next/headers';

import { getPayload } from 'payload';
import config from '@/payload.config';
import type { ContentPage } from '@/payload-types';

import { markets, type MarketCode } from '@/markets';

import { RefreshRouteOnSave } from '@/components/helpers/live-refresh';

import { HeroBlockComponent } from '@/cms/blocks/Hero';
import { SubmenuBlockComponent } from '@/cms/blocks/Submenu';
import { IntroBlockComponent } from '@/cms/blocks/Intro';

type BlockComponentProps<T extends NonNullable<ContentPage['blocks']>[number]['blockType']> = Extract<
  NonNullable<ContentPage['blocks']>[number],
  { blockType: T }
>;

const PAGE_BLOCKS: {
  [T in NonNullable<ContentPage['blocks']>[number]['blockType']]: React.ComponentType<BlockComponentProps<T>>;
} = {
  hero: HeroBlockComponent,
  submenu: SubmenuBlockComponent,
  intro: IntroBlockComponent,
};

type Params = {
  market: MarketCode;
  slug: string[];
};

type Props = {
  params: Promise<Params>;
};

export async function generateStaticParams(): Promise<Params[]> {
  if (process.env.NODE_ENV === 'development') {
    return [];
  }

  const payload = await getPayload({ config });

  const params: Params[] = [];

  for (const market of markets) {
    const pages = await payload.find({
      collection: 'content_pages',
      locale: market.code,
    });

    for (const page of pages.docs) {
      if (!page.localizedSlug) {
        continue;
      }

      params.push({
        market: market.code,
        slug: page.localizedSlug.split('/').filter(Boolean),
      });
    }
  }

  return params;
}

export default async function ContentPage({ params }: Props) {
  const { market, slug } = await params;
  const slugString = slug.join('/');

  const payload = await getPayload({ config });

  const hits = await payload.find({
    locale: market,
    collection: 'content_pages',
    draft: (await draftMode()).isEnabled,
    where: { localizedSlug: { equals: slugString } },
  });

  if (hits.totalDocs === 0) {
    // TODO: Redirect to 404 page
    return <div>Not found</div>;
  }

  const [page] = hits.docs;

  return (
    <>
      <RefreshRouteOnSave />
      {/* slug: {page.localizedSlug} */}
      {page.blocks?.map((block, index) => {
        const Block = PAGE_BLOCKS[block.blockType];
        // @ts-expect-error there may be some mismatch between the expected types here
        return <Block key={index} {...block} />;
      })}
    </>
  );
}
