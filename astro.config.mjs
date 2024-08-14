import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';


// astro.config.mjs
export default {
  buildOptions: {
    outDir: './public_html',
  },
};
