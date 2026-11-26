// Guards the translations: every language of a page must have exactly the same keys and list lengths as English,
// and no string may be empty. Also lists strings left identical to English so they can be reviewed on purpose.
//   node scripts/check-i18n.mjs
import { createServer } from 'vite';

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const load = (p) => server.ssrLoadModule(p);
const { pageRegistry } = await load('/src/i18n/index.ts');
const dicts = {
  home: (await load('/src/i18n/home.ts')).home,
  link: (await load('/src/i18n/link.ts')).link,
  fleet: (await load('/src/i18n/fleet.ts')).fleet,
  company: (await load('/src/i18n/company.ts')).company,
  ui: (await load('/src/i18n/ui.ts')).ui,
};

const problems = [];
const same = [];
const walk = (en, other, path, locale, name) => {
  if (Array.isArray(en)) {
    if (!Array.isArray(other) || other.length !== en.length) return problems.push(`${name}/${locale}: ${path} should be a list of ${en.length}`);
    en.forEach((v, i) => walk(v, other[i], `${path}[${i}]`, locale, name));
  } else if (en && typeof en === 'object') {
    if (!other || typeof other !== 'object') return problems.push(`${name}/${locale}: ${path} should be an object`);
    for (const k of Object.keys(en)) walk(en[k], other[k], path ? `${path}.${k}` : k, locale, name);
    for (const k of Object.keys(other)) if (!(k in en)) problems.push(`${name}/${locale}: extra key ${path ? path + '.' : ''}${k}`);
  } else if (typeof en === 'string') {
    if (typeof other !== 'string' || !other.trim()) problems.push(`${name}/${locale}: ${path} is empty or missing`);
    else if (other === en && en.length > 14) same.push(`${name}/${locale}: ${path} = "${en.slice(0, 60)}"`);
  }
};

for (const [name, dict] of Object.entries(dicts)) {
  const wanted = name === 'ui' ? ['en', 'es', 'pt'] : pageRegistry[name].locales;
  for (const l of wanted) {
    if (!dict[l]) problems.push(`${name}: missing ${l}`);
    else if (l !== 'en') walk(dict.en, dict[l], '', l, name);
  }
  for (const l of Object.keys(dict)) if (!wanted.includes(l)) problems.push(`${name}: has ${l} copy but the page is not published in ${l}`);
}
await server.close();
if (same.length) console.log('Identical to English (check they are meant to be):\n  ' + same.join('\n  '));
if (problems.length) { console.error('\nProblems:\n  ' + problems.join('\n  ')); process.exit(1); }
console.log('\ni18n OK: all languages match the English structure.');
