import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fleetmovix.com', // keep in sync with src/config/site.ts
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
