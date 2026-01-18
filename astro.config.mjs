import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://norbertfarkas-dc.github.io/tetszike/', // <-- GitHub Pages URL
  base: '/tetszike/', // <-- ide kell a repo neve
  integrations: [tailwind()],
});
