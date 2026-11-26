# Movix website

Marketing site for Movix and its two services: linkMovix (gateway to idle ride-hail drivers) and fleetMovix (own urban fleet, HORECA). Static site built with [Astro](https://astro.build) and deployed on Vercel at https://fleetmovix.com. Same stack as iberoute.com.

## Develop

Requires Node 22.23+ (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
node scripts/check-i18n.mjs   # every language must match the English structure
```

## Pages and languages

One route file, `src/pages/[...slug].astro`, serves every page in every language. Which pages exist in which languages is `pageRegistry` in `src/i18n/index.ts`; the copy lives in `src/i18n/*.ts`.

| Page | Languages |
| --- | --- |
| Home `/` | English, Spanish `/es/`, Portuguese `/pt/` |
| linkMovix `/linkmovix/` | English, Spanish |
| fleetMovix `/fleetmovix/` | English, Portuguese |
| Company and investors | English, Spanish, Portuguese (hidden, see below) |

The brand is Pop Route: colours, fonts and radii in `src/styles/brands.css`, logo marks in `src/components/Mark.astro`.

## Switches (`src/config/site.ts`)

| Switch | Now | What it does |
| --- | --- | --- |
| `url` | `https://fleetmovix.com` | Canonical links, sitemap, social cards. Also set `site` in `astro.config.mjs`. |
| `email` | set | Address on the contact button and in the structured data. |
| `noindex` | `false` | `true` keeps search engines out (meta robots and robots.txt). Use it for a private preview build. |
| `companyPublic` | `false` | The Company page is not built, linked or listed in the sitemap until this is `true`. Fill the `[bracketed]` placeholders in `src/i18n/company.ts` first (team, investor logos, form). |
| `blogPublic` | `false` | The success-case blog is built but unlinked, noindex and out of the sitemap until `true`. |
| `legalName`, `linkedin` | `null` | Shown in the footer and structured data once set. |

## Contact

The call to action is an email button (`mailto:` with a subject per page and a short template) and nothing is collected on the site. `src/components/Contact.astro` falls back to a form that sends nothing when `site.email` is empty, so connect a form service before using it on the live site.

## Deploy

Import this GitHub repository in Vercel; the Astro framework is detected (`vercel.json` also sets it). Every push to `main` redeploys. `vercel.json` adds security headers and long caching for `/_astro/` assets.
