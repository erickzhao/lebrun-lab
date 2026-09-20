/**
 * The homepage body is one Markdown document that Dr. Lebrun edits in Decap
 * CMS, divided by `#` headings. The redesigned homepage draws three of its
 * bands from elsewhere — the research topics and the news list come from their
 * collections, and the opening sentence becomes the masthead — so the body is
 * split up rather than rendered whole.
 *
 * Anything that is not recognised falls through into the prose band, so a
 * section Dr. Lebrun adds through the CMS still appears on the page.
 */

export interface SponsorLogo {
  src: string
  alt: string
}

export interface HomeSections {
  /** The bold opening sentence, shown under the masthead title. */
  lead?: string
  /** Markdown for the "About" band, with the original `#` headings demoted to `##`. */
  prose: string
  /** The sponsor logos and the heading that introduced them. */
  sponsors: { heading: string; logos: SponsorLogo[] } | null
}

const LEAD = /^_\*\*(.+?)\*\*_[ \t]*$/m
const IMAGE = /!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g

/** A section the live news list already covers. */
const isNews = (heading: string) => /latest\s+news/i.test(heading)

/** A section whose images are logos, not illustrations. */
const isSponsors = (heading: string) => /sponsor/i.test(heading)

export function splitHome(body: string): HomeSections {
  const chunks = body.split(/^#[ \t]+/m)
  const preamble = chunks.shift() ?? ''

  const sections = chunks.map((chunk) => {
    const newline = chunk.indexOf('\n')
    return newline === -1
      ? { heading: chunk.trim(), content: '' }
      : { heading: chunk.slice(0, newline).trim(), content: chunk.slice(newline + 1) }
  })

  // The opening sentence is pulled up into the masthead, so it must not also
  // appear in the prose below it.
  let lead: string | undefined
  const takeLead = (text: string) => {
    if (lead) return text
    const match = LEAD.exec(text)
    if (!match) return text
    lead = match[1].trim()
    return text.replace(match[0], '')
  }

  let rest = takeLead(preamble)
  let sponsors: HomeSections['sponsors'] = null
  const prose: string[] = []

  if (rest.trim()) prose.push(rest.trim())

  for (const section of sections) {
    const content = takeLead(section.content)

    if (isNews(section.heading)) continue

    if (isSponsors(section.heading)) {
      const logos: SponsorLogo[] = []
      for (const match of content.matchAll(IMAGE)) {
        logos.push({ alt: match[1].trim(), src: match[2] })
      }
      if (logos.length > 0) {
        sponsors = { heading: section.heading.replace(/\.\s*$/, ''), logos }
        continue
      }
    }

    prose.push(`## ${section.heading}\n\n${content.trim()}`)
  }

  return { lead, prose: prose.join('\n\n'), sponsors }
}
