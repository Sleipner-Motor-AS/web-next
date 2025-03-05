import 'server-only';

import { type MarketLanguageCode } from '@/markets';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  'no-NB': () => import('./no-NB.json').then((module) => module.default),
  'sv-SE': () => import('./sv-SE.json').then((module) => module.default),
  'da-DK': () => import('./da-DK.json').then((module) => module.default),
  'de-DE': () => import('./de-DE.json').then((module) => module.default),
  'fi-FI': () => import('./fi-FI.json').then((module) => module.default),
  'it-IT': () => import('./it-IT.json').then((module) => module.default),
} satisfies Record<MarketLanguageCode, () => Promise<Record<string, string>>>;

export const getDictionary = async (lang: MarketLanguageCode) => dictionaries[lang]();
