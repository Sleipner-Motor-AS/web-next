export const markets = [
  {
    label: 'International',
    language: 'en-US',
  },
  {
    label: 'Norway',
    language: 'no-NB',
  },
  {
    label: 'Sweden',
    language: 'sv-SE',
  },
  {
    label: 'Denmark',
    language: 'da-DK',
  },
  {
    label: 'UK',
    language: 'en-GB',
  },
  {
    label: 'Germany',
    language: 'de-DE',
  },
  {
    label: 'Finland',
    language: 'fi-FI',
  },
  {
    label: 'Italy',
    language: 'it-IT',
  },
] as const;

export type Market = (typeof markets)[number];
export type MarketLanguageCode = Market['language'];
