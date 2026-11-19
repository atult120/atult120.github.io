import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://atult120.github.io',
  integrations: [
    sitemap({
      filter: (page) => !/\/blog\/[^/]+/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
