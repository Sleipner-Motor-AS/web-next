export const marketCodes = ['en', 'no', 'se', 'dk', 'de', 'fi', 'it', 'pl', 'uk'] as const;
export type MarketCode = (typeof marketCodes)[number];

export const languageCodes = ['en', 'no', 'sv', 'da', 'de', 'fi', 'it'] as const;
export type LanguageCode = (typeof languageCodes)[number];

type Market = {
  label: string;
  code: MarketCode;
  language: LanguageCode;
};

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
    code: 'se',
    language: 'sv',
  },
  {
    label: 'Denmark',
    code: 'dk',
    language: 'da',
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
  {
    label: 'Poland',
    code: 'pl',
    language: 'en',
  },
  {
    label: 'UK',
    code: 'uk',
    language: 'en',
  },
] satisfies Market[];
