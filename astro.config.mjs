// @ts-check
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://lebrunlaboratory.com',
  build: {
    // Emit /about/index.html so existing URLs such as /about/ keep working.
    format: 'directory',
  },
})
