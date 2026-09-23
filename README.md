# Lebrun Laboratory

Website for the Jean-Jacques Lebrun laboratory, part of the Cancer Research
Program at the Research Institute of the McGill University Health Centre.

Live at **https://lebrunlaboratory.com**

## How it works

A static site built with [Astro](https://astro.build) and styled with
[Bulma](https://bulma.io). All content is Markdown in this repository; there is
no database and no server. Editors change content through
[Decap CMS](https://decapcms.org) at `/admin`, which commits to `master`, and
Netlify rebuilds and deploys from there.

## Running it locally

Requires Node 22.12 or newer (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # writes dist/
npm run preview  # serve the built site
```

## Where content lives

| Path | What it holds |
| --- | --- |
| `src/content/news/` | One Markdown file per news post |
| `src/content/research/` | One Markdown file per research topic |
| `src/content/pages/` | The fixed pages: home, about, team, contact, and so on |
| `public/img/` | Every image, figure and PDF uploaded through the CMS |

Each file's **name becomes its URL**, so renaming one breaks any existing link
to it. `src/content.config.ts` declares the shape of each collection's
frontmatter; it deliberately mirrors the fields defined in
`public/admin/config.yml`, so the two should be changed together.

## Editing through the CMS

`/admin` loads Decap CMS. Editors sign in with Netlify Identity, and Decap
commits their changes through Git Gateway. Inviting a new editor is done from
the Netlify dashboard under **Identity**.

> **Note:** Git Gateway is
> [deprecated by Netlify](https://docs.netlify.com/manage/security/secure-access-to-sites/git-gateway/).
> It continues to work for sites that already have it enabled and still receives
> security fixes, but no bug fixes. Moving to Decap's GitHub backend is the
> supported alternative; it requires each editor to have a GitHub account with
> write access to this repository.

## Deployment

Netlify builds `npm run build` and publishes `dist/`. The Node version is pinned
in both `.nvmrc` and `netlify.toml` so the build environment lives in this
repository rather than only in the Netlify dashboard.

`/admin` edits the branch the deploy was built from (Netlify's `BRANCH`
variable), so the CMS on a branch deploy or deploy preview reads and commits
to that branch rather than to `master`. Production is built from `master`, so
there it behaves exactly as `public/admin/config.yml` says.

## Notes

- The Google Maps embed key in `src/components/Map.astro` is public by
  necessity on a static site. It should be restricted to this domain in the
  Google Cloud console. Set `PUBLIC_GOOGLE_MAPS_KEY` in the Netlify environment
  to override it.
- Images in `public/img/` are served at their original size. Large uploads are
  worth resizing before adding them.
