import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// astro.config.mjs
export default defineConfig({
  buildOptions: {
    outDir: './dist',
  },
  integrations: [netlify()],
});
