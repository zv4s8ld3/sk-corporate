import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ↓ ここに redirects を追加します
  redirects: {
    '/': '/ja/',
  },
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
