import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko'],
    routing: {
      strategy: 'prefix', 
      prefixDefaultLocale: true,
      fallbackType: 'redirect',
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
});
