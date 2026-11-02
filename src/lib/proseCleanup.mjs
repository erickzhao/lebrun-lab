/**
 * Build-time tidying of the Markdown bodies that come out of the CMS, applied
 * to the HTML tree so the lab's own text is never edited.
 *
 * - Every page already has one <h1>, its title, so a `#` heading in a body is
 *   really a section heading. It becomes an <h2>, which is also what the
 *   accent-rule heading style keys off, so the rule appears on every section
 *   rather than only where the CMS happened to write `##`.
 * - A heading with nothing in it (a stray `###` left behind in the editor)
 *   renders as an empty box and is dropped.
 * - The old CMS wrote `alt="null"` for an image saved without alt text. An
 *   empty alt marks the image as decorative instead of reading "null" aloud.
 */
export function proseCleanup() {
  return {
    name: 'prose-cleanup',
    element: {
      filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'img'],
      visit(node, ctx) {
        if (node.tagName === 'img') {
          if (node.properties?.alt === 'null') ctx.setProperty(node, 'alt', '')
          return
        }

        if (ctx.textContent(node).trim() === '') {
          ctx.removeNode(node)
          return
        }

        if (node.tagName === 'h1') {
          ctx.replaceNode(node, { ...node, tagName: 'h2' })
        }
      },
    },
  }
}
