export const markets = [
  {
    label: 'International',
    code: 'en',
    language: 'en',
  },
  {
    label: 'Norway',
    code: 'no',
    language: 'no-NB',
  },
  {
    label: 'Sweden',
    code: 'sv',
    language: 'sv-SE',
  },
  {
    label: 'Denmark',
    code: 'da',
    language: 'da-DK',
  },
  {
    label: 'UK',
    code: 'uk',
    language: 'en',
  },
  {
    label: 'Germany',
    code: 'de',
    language: 'de-DE',
  },
  {
    label: 'Finland',
    code: 'fi',
    language: 'fi-FI',
  },
  {
    label: 'Italy',
    code: 'it',
    language: 'it-IT',
  },
] as const;

export type Market = (typeof markets)[number];
export type MarketCode = Market['code'];
export type MarketLanguageCode = Market['language'];
