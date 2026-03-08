// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deploy (project pages): https://<user>.github.io/<repo>/
const site = 'https://cianweeresinghe-sudo.github.io/yellowunsub';

export default defineConfig({
  site,
  base: '/yellowunsub',
  integrations: [sitemap()],
  trailingSlash: 'always',
});
