import { defineConfig } from 'astro/config';

// https://astro.build/confi
// astro.config.mj

// astro.config.mjs

export default {
    render: {
      // Importar y activar script.js en cada página
      // usando una función de transformación de HTML
      html: (html) => {
        return html.replace('</head>', '<script type="module" src="../js/script.js"></script></head>');
      }
    }
  };
  