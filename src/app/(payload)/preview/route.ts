import type { CollectionSlug, PayloadRequest } from 'payload';

import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

import { getCms } from '@/cms';
import { env } from '@/env';

import type { MarketCode } from '@/markets';

// https://payloadcms.com/docs/admin/preview
export async function GET(
  req: {
    cookies: {
      get: (name: string) => {
        value: string;
      };
    };
  } & Request,
): Promise<Response> {
  const cms = await getCms();

  const { searchParams } = new URL(req.url);

  const path = searchParams.get('path');
  const collection = searchParams.get('collection') as CollectionSlug;
  const market = searchParams.get('market') as MarketCode;
  const localizedSlug = searchParams.get('localizedSlug');
  const previewSecret = searchParams.get('previewSecret');

  if (previewSecret !== env.secret.payload.previewSecret) {
    return new Response('You are not allowed to preview this page', { status: 403 });
  }

  if (!path || !collection || !market || !localizedSlug) {
    return new Response('Insufficient search params', { status: 404 });
  }

  if (!path.startsWith('/')) {
    return new Response('This endpoint can only be used for relative previews', { status: 500 });
  }

  let user;

  try {
    // TODO: This logs [12:00:51] ERROR: Failed to create URL object from URL: , falling back to http://localhost
    // Everything still works, but we need to figure how to stop this log
    user = await cms.auth({
      req: req as unknown as PayloadRequest,
      headers: req.headers,
    });
  } catch (error) {
    cms.logger.error({ err: error }, 'Error verifying token for live preview');
    return new Response('You are not allowed to preview this page', { status: 403 });
  }

  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response('You are not allowed to preview this page', { status: 403 });
  }

  draft.enable();

  redirect(`/${market}${path}`);
}
