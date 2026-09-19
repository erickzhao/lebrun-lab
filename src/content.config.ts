import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * Frontmatter is written by editors through Decap CMS, so every field that the
 * CMS marks optional is optional here too. Keeping the schemas permissive means
 * a half-filled entry shows up incomplete rather than failing the whole build.
 */

/**
 * Gatsby derived each page's URL from its filename verbatim. Astro's default id
 * generation slugifies it, which would silently rewrite live URLs — several
 * filenames contain a curly apostrophe or an en dash. Keep the filename as the
 * id so every existing URL keeps resolving.
 */
const filenameId = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '')

const attachment = z.object({
  file: z.string(),
  name: z.string().optional(),
})

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news', generateId: filenameId }),
  schema: z.object({
    templateKey: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
})

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research', generateId: filenameId }),
  schema: z.object({
    templateKey: z.string().optional(),
    title: z.string(),
    subtitle: z.string().optional(),
    tags: z.array(z.string()).nullish(),
    headerImage: z.string().optional(),
    files: z.array(attachment).nullish(),
  }),
})

const teamMember = z.object({
  name: z.string(),
  position: z.string(),
  photo: z.string().optional(),
  description: z.string().optional(),
  email: z.string().optional(),
})

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages', generateId: filenameId }),
  schema: z.object({
    templateKey: z.string().optional(),
    hidden: z.boolean().optional(),
    title: z.string().optional(),
    subtitle: z.string().optional(),
    headerImage: z.string().optional(),
    headshot: z.string().optional(),
    members: z.array(teamMember).nullish(),
    contact: z
      .object({
        name: z.string().optional(),
        position: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
      })
      .optional(),
    address: z
      .object({
        line1: z.string().optional(),
        line2: z.string().optional(),
        city: z.string().optional(),
        province: z.string().optional(),
        postalCode: z.string().optional(),
      })
      .optional(),
    directions: z.string().optional(),
  }),
})

export const collections = { news, research, pages }
