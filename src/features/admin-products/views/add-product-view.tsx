import type { AdminViewServerProps } from 'payload';

import { DefaultTemplate } from '@payloadcms/next/templates';

import { AddProductForm } from '../components/add-product-form';

export async function AddProductView({ initPageResult, params, searchParams }: AdminViewServerProps) {
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
      <AddProductForm />
    </DefaultTemplate>
  );
}
