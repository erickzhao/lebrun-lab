/**
 * Plain-text excerpt of a Markdown body, mirroring the `pruneLength: 400`
 * excerpts the previous Gatsby build produced for the news and research
 * listings. Returns the text and whether it was cut short, so callers can
 * decide whether a "Keep Reading" link is warranted.
 */
export function excerpt(markdown: string, length = 400): { text: string; truncated: boolean } {
  const plain = markdown
    .replace(/^---[\s\S]*?---/, '') // frontmatter, if any survived
    .replace(/```[\s\S]*?```/g, ' ') // fenced code
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links keep their text
    .replace(/<[^>]+>/g, ' ') // inline html
    .replace(/[#>*_`~|-]/g, ' ') // markdown punctuation
    .replace(/\s+/g, ' ')
    .trim()

  if (plain.length <= length) return { text: plain, truncated: false }

  const cut = plain.slice(0, length)
  const lastSpace = cut.lastIndexOf(' ')
  return { text: `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length)}…`, truncated: true }
}
