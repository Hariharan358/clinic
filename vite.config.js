// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // if you're using a separate PostCSS config
  },
});
