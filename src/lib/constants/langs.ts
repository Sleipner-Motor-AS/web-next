export const langs = [
  {
    label: 'International',
    code: 'en-US',
  },
  {
    label: 'Norway',
    code: 'no-NB',
  },
] as const;

export type Lang = (typeof langs)[number];
export type LangCode = Lang['code'];
