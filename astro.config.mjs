// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lebrunlaboratory.com',
  build: {
    // Emit /about/index.html so existing URLs such as /about/ keep working.
    format: 'directory',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bulma 1.x still uses the deprecated Sass if() form internally.
          silenceDeprecations: ['if-function', 'import', 'global-builtin'],
        },
      },
    },
  },
})
