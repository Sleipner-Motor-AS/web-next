export const marketCodes = ['en', 'no', 'sv', 'da', 'uk', 'de', 'fi', 'it'] as const;
type MarketCode = (typeof marketCodes)[number];

const languageCodes = ['en', 'no', 'sv', 'da', 'de', 'fi', 'it'] as const;
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
] satisfies Market[];
