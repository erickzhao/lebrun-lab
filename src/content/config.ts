/**
 * Astro Content Collections configuration.
 *
 * Defines Zod schemas for each content collection so that frontmatter is
 * validated at build time and every `getEntry()`/`getCollection()` call
 * returns strongly-typed data.
 *
 * Three collections mirror the DecapCMS config:
 *  - `news`     – date-stamped blog-style posts
 *  - `research` – research topic pages with tags and file attachments
 *  - `pages`    – all other static pages (about, team, contact, etc.)
 *
 * @see https://docs.astro.build/en/guides/content-collections/
 */
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.array(z.string()).default([]),
    headerImage: z.string().optional(),
    /** Optional because some existing entries were saved without a `name`. */
    files: z
      .array(
        z.object({
          file: z.string(),
          name: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

/**
 * Catch-all collection for the static pages of the site.
 *
 * Because pages have wildly different frontmatter shapes (e.g. the team page
 * has a `members` list while the contact page has `address`/`contact` objects),
 * most fields are optional. Each Astro page file knows which fields to expect
 * for the entry it fetches.
 */
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    headerImage: z.string().optional(),

    /** Principal Investigator page */
    headshot: z.string().optional(),

    /** Team page */
    members: z
      .array(
        z.object({
          name: z.string(),
          position: z.string(),
          photo: z.string().optional(),
          description: z.string().default(''),
          email: z.string().default(''),
        }),
      )
      .optional(),

    /** Contact page */
    contact: z
      .object({
        name: z.string(),
        position: z.string(),
        email: z.string(),
        phone: z.string(),
      })
      .optional(),
    address: z
      .object({
        line1: z.string(),
        line2: z.string(),
        city: z.string(),
        province: z.string(),
        postalCode: z.string(),
      })
      .optional(),
    directions: z.string().optional(),
  }),
});

export const collections = { news, research, pages };
