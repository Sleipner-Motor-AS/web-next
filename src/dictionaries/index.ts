import 'server-only';

import { type LanguageCode } from '@/markets';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  no: () => import('./no.json').then((module) => module.default),
  sv: () => import('./sv.json').then((module) => module.default),
  da: () => import('./da.json').then((module) => module.default),
  de: () => import('./de.json').then((module) => module.default),
  fi: () => import('./fi.json').then((module) => module.default),
  it: () => import('./it.json').then((module) => module.default),
} satisfies Record<LanguageCode, () => Promise<Record<string, string>>>;

export const getDictionary = async (lang: LanguageCode) => dictionaries[lang]();
