import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://https://norbertfarkas-dc.github.io/tetszike/', // <-- GitHub Pages URL
  base: '/gh-pages/', // <-- ide kell a repo neve
  integrations: [tailwind()],
});
