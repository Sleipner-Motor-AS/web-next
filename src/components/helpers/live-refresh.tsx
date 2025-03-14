'use client';

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation.js';

import { env } from '@/env';

export const RefreshRouteOnSave = () => {
  const router = useRouter();
  return <PayloadLivePreview refresh={() => router.refresh()} serverURL={env.public.url} />;
};
