// Turns the Astro build (dist/) into self-contained HTML files for a claude.ai
// preview tab: CSS and JS inlined, fonts from Google Fonts instead of self-hosted
// files, links rewritten to the preview's flat file names.
//   npm run build && node scripts/build-preview.mjs [outDir]
// The home page is written without <html>/<head>/<body> (the preview host wraps it)
// and is published as index.html; every other page is a full document next to it.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = 'dist';
const outDir = process.argv[2] ?? 'dist-preview';
const fonts =
  'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=DM+Sans:opsz,wght@9..40,100..1000&display=swap';

// Every built page, keyed by its site path ('/', '/linkmovix/', '/blog/x/').
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const sitePaths = walk(dist)
  .filter((f) => f.endsWith('index.html'))
  .map((f) => '/' + relative(dist, f).replace(/index\.html$/, ''));
const fileFor = (p) => (p === '/' ? 'index.html' : p.slice(1, -1).replaceAll('/', '-') + '.html');

// The blog is hidden on the site; the preview gets a footer link so it can be reviewed.
const hiddenLink = '<p class="footer-legal"><a href="blog.html">Preview only: open the hidden blog →</a></p>';

mkdirSync(outDir, { recursive: true });
for (const sitePath of sitePaths) {
  const isHome = sitePath === '/';
  let html = readFileSync(join(dist, sitePath, 'index.html'), 'utf8');
  html = html.replace(/<link rel="stylesheet" href="\/(_astro\/[^"]+\.css)">/g, (_, p) =>
    `<style>${readFileSync(join(dist, p), 'utf8').replace(/@font-face\{[^}]*\}/g, '')}</style>`);
  html = html.replace(/<script type="module" src="\/(_astro\/[^"]+\.js)"><\/script>/g, (_, p) =>
    `<script type="module">${readFileSync(join(dist, p), 'utf8')}</script>`);
  html = html.replace(/href="(\/[^"#]*)(#[^"]*)?"/g, (m, path, hash = '') =>
    sitePaths.includes(path) ? `href="${fileFor(path)}${hash}"` : m);
  html = html.replace('<p class="footer-legal">', hiddenLink + '<p class="footer-legal">');

  const title = isHome ? 'Movix Website' : html.match(/<title>([^<]*)<\/title>/)[1].replace(/ \| Movix$/, '');
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1];
  const bodyClass = html.match(/<body class="([^"]*)"/)?.[1] ?? '';
  const keep = [...head.matchAll(/<style>[\s\S]*?<\/style>/g)].map((m) => m[0]);
  const top = [
    `<title>${title}</title>`,
    '<meta name="claude:viewport-fit-sides" content="cover">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    `<link rel="stylesheet" href="${fonts}">`,
    ...keep,
  ];
  const page = isHome
    ? [...top, `<script>document.body.className = ${JSON.stringify(bodyClass)};</script>`, body.trim()].join('\n')
    : ['<!doctype html>', `<html lang="${html.match(/<html lang="([^"]*)"/)?.[1] ?? 'en'}">`, '<head>', '<meta charset="utf-8">',
       '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
       '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>',
       ...top, '</head>', `<body class="${bodyClass}">`, body.trim(), '</body>', '</html>'].join('\n');

  const leftovers = page.match(/(?:href|src)="\/[^"]*"/g);
  if (leftovers) throw new Error(`${sitePath}: unresolved local paths: ${leftovers.join(', ')}`);
  const out = isHome ? 'movix-website.html' : fileFor(sitePath);
  writeFileSync(join(outDir, out), page);
  console.log(`${sitePath} -> ${out} (${(page.length / 1024).toFixed(0)} KB)`);
}
