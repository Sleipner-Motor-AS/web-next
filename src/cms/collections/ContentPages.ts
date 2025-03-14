import type { CollectionConfig } from 'payload';

import { env } from '@/env';

import { HeroBlockConfig } from '@/cms/blocks/Hero';

export const ContentPages: CollectionConfig = {
  slug: 'content_pages',
  dbName: 'cms_content_pages',
  labels: {
    singular: 'Content Page',
    plural: 'Content Pages',
  },
  admin: {
    preview: async ({ localizedSlug }, { locale }) => {
      const parsedLocalizedSlug = (localizedSlug as string) || '_';
      const encodedParams = new URLSearchParams({
        localizedSlug: parsedLocalizedSlug,
        collection: 'content_pages',
        path: `/${parsedLocalizedSlug}`,
        market: locale,
        previewSecret: env.secret.payload.previewSecret,
      });

      console.log(encodedParams.toString());

      return `/preview?${encodedParams.toString()}`;
    },
    useAsTitle: 'slug',
    listSearchableFields: ['slug', 'localizedSlug'],
  },
  versions: {
    drafts: {
      validate: true,
    },
    maxPerDoc: 0,
  },
  fields: [
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'localizedSlug',
      label: 'Localized Slug',
      type: 'text',
      localized: true,
      defaultValue: '',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [HeroBlockConfig],
    },
  ],
};
