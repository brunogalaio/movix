import { site } from '../config/site';
import { defaultLocale, hrefFor, localeMeta, pathFor, type Locale } from '../i18n';
import { uiFor } from '../i18n/ui';

const abs = (p: string) => new URL(p, site.url).href;
const orgId = abs('/#organization');

export const organization = (locale: Locale = defaultLocale) => ({
  '@type': 'Organization',
  '@id': orgId,
  name: site.name,
  ...(site.legalName && { legalName: site.legalName }),
  url: abs('/'),
  logo: abs('/logo.png'),
  description: site.descriptions[locale],
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.country },
  areaServed: site.areaServed,
  ...(site.email && { email: site.email }),
  ...(site.linkedin && { sameAs: [site.linkedin] }),
  subOrganization: [
    { '@type': 'Brand', name: 'linkMovix', url: abs(hrefFor('link', locale)) },
    { '@type': 'Brand', name: 'fleetMovix', url: abs(hrefFor('fleet', locale)) },
  ],
});

export const website = (locale: Locale = defaultLocale) => ({
  '@type': 'WebSite',
  '@id': `${abs(pathFor('home', locale))}#website`,
  url: abs(pathFor('home', locale)),
  name: site.name,
  publisher: { '@id': orgId },
  inLanguage: localeMeta[locale].htmlLang,
});

export const service = (o: { name: string; path: string; description: string; serviceType: string; locale?: Locale }) => ({
  '@type': 'Service',
  name: o.name,
  url: abs(o.path),
  description: o.description,
  serviceType: o.serviceType,
  provider: { '@id': orgId },
  areaServed: site.areaServed,
  brand: { '@type': 'Brand', name: o.name },
  inLanguage: localeMeta[o.locale ?? defaultLocale].htmlLang,
});

export const breadcrumbs = (items: { name: string; path: string }[], locale: Locale = defaultLocale) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: uiFor(locale).crumbHome, path: pathFor('home', locale) }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faq = (qa: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
});

export const article = (o: { title: string; description: string; path: string; date: string }) => ({
  '@type': 'BlogPosting',
  headline: o.title,
  description: o.description,
  url: abs(o.path),
  datePublished: o.date,
  author: { '@id': orgId },
  publisher: { '@id': orgId },
  image: abs('/og.png'),
});
