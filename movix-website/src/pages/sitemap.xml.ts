import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { alternates, defaultLocale, localeMeta, pathFor } from '../i18n';
import { publicPosts } from '../lib/blog';
import { liveRoutes } from '../lib/pages';

const abs = (p: string) => new URL(p, site.url).href;

export const GET: APIRoute = () => {
  // Each page lists all its language versions (and itself), as Google expects for hreflang in a sitemap.
  const pages = liveRoutes.map((r) => {
    const alts = alternates(r.id);
    const links =
      alts.length > 1
        ? [
            ...alts.map((a) => `<xhtml:link rel="alternate" hreflang="${localeMeta[a.locale].hreflang}" href="${abs(a.href)}"/>`),
            `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(r.id, defaultLocale))}"/>`,
          ].join('')
        : '';
    return `  <url><loc>${abs(r.path)}</loc>${links}</url>`;
  });
  const blog = [...(publicPosts.length ? ['/blog/'] : []), ...publicPosts.map((p) => `/blog/${p.slug}/`)].map((u) => `  <url><loc>${abs(u)}</loc></url>`);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...pages, ...blog].join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
