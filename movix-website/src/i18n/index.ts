/**
 * Languages and routing. English is the default (no prefix); Spanish and European Portuguese live under /es/ and /pt/.
 * Which page exists in which language is the list in `pageRegistry`: add a locale there (and its copy) to publish it.
 */
export const locales = ['en', 'es', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { name: string; short: string; htmlLang: string; hreflang: string; og: string }> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en', og: 'en_GB' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es', hreflang: 'es', og: 'es_ES' },
  pt: { name: 'Português', short: 'PT', htmlLang: 'pt-PT', hreflang: 'pt-PT', og: 'pt_PT' },
};

export type PageId = 'home' | 'link' | 'fleet' | 'company';

/** Slug per language ('' is the home page). A string is used for every language. */
interface PageEntry { locales: Locale[]; slug: string | (Partial<Record<Locale, string>> & { en: string }) }
export const pageRegistry: Record<PageId, PageEntry> = {
  home: { locales: ['en', 'es', 'pt'], slug: '' },
  link: { locales: ['en', 'es'], slug: 'linkmovix' }, // Spanish and English speaking audience
  fleet: { locales: ['en', 'pt'], slug: 'fleetmovix' }, // Portuguese speaking logistics operators
  company: { locales: ['en', 'es', 'pt'], slug: { en: 'investors', es: 'empresa', pt: 'empresa' } },
};
export const pageIds = Object.keys(pageRegistry) as PageId[];
export const isPageId = (x: string): x is PageId => x in pageRegistry;

export const has = (id: PageId, l: Locale) => pageRegistry[id].locales.includes(l);
const slugFor = (id: PageId, l: Locale) => {
  const s = pageRegistry[id].slug;
  return typeof s === 'string' ? s : (s[l] ?? s.en);
};
export const pathFor = (id: PageId, l: Locale) => `/${l === defaultLocale ? '' : `${l}/`}${slugFor(id, l) ? `${slugFor(id, l)}/` : ''}`;
/** Link to a page in the visitor's language, or the English page when it has no translation. */
export const hrefFor = (id: PageId, l: Locale) => pathFor(id, has(id, l) ? l : defaultLocale);
export const alternates = (id: PageId) => pageRegistry[id].locales.map((locale) => ({ locale, href: pathFor(id, locale) }));
export const allRoutes = pageIds.flatMap((id) => pageRegistry[id].locales.map((locale) => ({ id, locale, path: pathFor(id, locale) })));

/** A page's copy in one language, falling back to English if a translation is missing. */
export const pick = <T>(dict: Partial<Record<Locale, T>> & { en: T }, locale: Locale): T => dict[locale] ?? dict.en;
