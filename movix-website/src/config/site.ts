/** Business details and site-wide switches. Fields left as null are hidden from the pages. */
export const site = {
  name: 'Movix',
  legalName: null as string | null, // e.g. 'Movix, Lda.' once incorporated
  url: 'https://fleetmovix.com', // the public address, without a trailing slash; keep in sync with astro.config.mjs
  tagline: 'City logistics, on demand',
  description:
    'Movix is a Lisbon city logistics company: linkMovix connects carriers to idle ride-hail drivers, fleetMovix is a cross-dock with its own fleet for HORECA and parcels.',
  descriptions: {
    en: 'Movix is a Lisbon city logistics company: linkMovix connects carriers to idle ride-hail drivers, fleetMovix is a cross-dock with its own fleet for HORECA and parcels.',
    es: 'Movix es una empresa de logística urbana de Lisboa: linkMovix conecta a los transportistas con conductores de VTC disponibles y fleetMovix es un cross-dock con flota propia para HORECA y paquetería.',
    pt: 'A Movix é uma empresa de logística urbana de Lisboa: a linkMovix liga transportadoras a motoristas TVDE disponíveis e a fleetMovix é um cross-dock com frota própria para HORECA e encomendas.',
  },
  email: 'bruno.galaio@fleetmovix.com' as string | null, // shown on the contact button and in the structured data; a shared inbox such as hello@ can replace it later
  investorEmail: null as string | null, // e.g. 'investors@movix.pt'
  city: 'Lisbon',
  country: 'PT',
  countryName: 'Portugal',
  areaServed: ['Lisbon', 'Portugal'],
  linkedin: null as string | null,
  /** Keeps search engines out (meta robots + robots.txt). False on the live site; set to true for a private preview build. */
  noindex: false,
  /** Success-case blog. While false it is built but unlinked, noindex and left out of the sitemap. */
  blogPublic: false,
  /**
   * Company and investors page. While false it is not built at all: no page, no menu or footer link, not in the sitemap.
   * Turn it on once the team and backer placeholders in src/i18n/company.ts are filled in.
   */
  companyPublic: false,
};

