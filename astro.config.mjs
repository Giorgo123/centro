import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://stately-gumdrop-a6d22f.netlify.app/', // Reemplaza con tu URL de Netlify
  outDir: 'dist',
  adapter: netlify()
});
