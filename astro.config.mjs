// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [keystatic(), react()],
  vite: {
    plugins: [tailwindcss()]
  }
});