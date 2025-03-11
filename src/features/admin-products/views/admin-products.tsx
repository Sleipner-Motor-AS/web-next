import type { AdminViewServerProps } from 'payload';

import { DefaultTemplate } from '@payloadcms/next/templates';

import { getOdinProduct } from '../server/services/get-odin-product';

export async function AdminProducts({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const test = await getOdinProduct({ sku: 'SM908018 ' });

  console.log(test);

  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <h1>Custom Default Root View</h1>
      <p>This view uses the Default Template.</p>
    </DefaultTemplate>
  );
}
