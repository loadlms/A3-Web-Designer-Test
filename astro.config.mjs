import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import typography from '@tailwindcss/typography';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      config: {
        plugins: [typography],
      },
    }),
  ],
  site: 'http://localhost:3000',
  base: '/',
  output: 'static'
}); 