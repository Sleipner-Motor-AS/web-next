export const markets = [
  {
    label: 'International',
    code: 'en',
    language: 'en',
  },
  {
    label: 'Norway',
    code: 'no',
    language: 'no',
  },
  {
    label: 'Sweden',
    code: 'sv',
    language: 'sv',
  },
  {
    label: 'Denmark',
    code: 'da',
    language: 'da',
  },
  {
    label: 'UK',
    code: 'uk',
    language: 'en',
  },
  {
    label: 'Germany',
    code: 'de',
    language: 'de',
  },
  {
    label: 'Finland',
    code: 'fi',
    language: 'fi',
  },
  {
    label: 'Italy',
    code: 'it',
    language: 'it',
  },
] as const;

export type Market = (typeof markets)[number];
export type MarketCode = Market['code'];
export type MarketLanguageCode = Market['language'];
