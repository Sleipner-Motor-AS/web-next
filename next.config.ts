import { withPayload } from '@payloadcms/next/withPayload';

import './src/env';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    staticGenerationMaxConcurrency: 2,
  },
  // Your Next.js config here
};

export default withPayload(nextConfig);
