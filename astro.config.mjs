// @ts-check
import { defineConfig } from 'astro/config'
import { satteri } from '@astrojs/markdown-satteri'

import { proseCleanup } from './src/lib/proseCleanup.mjs'

export default defineConfig({
  site: 'https://lebrunlaboratory.com',
  build: {
    // Emit /about/index.html so existing URLs such as /about/ keep working.
    format: 'directory',
  },
  markdown: {
    // Astro's default processor, named so its plugin hook can be used.
    processor: satteri({ hastPlugins: [proseCleanup()] }),
  },
})
