import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://verticosys.com',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
