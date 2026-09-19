/**
 * Contact addresses in the CMS are sometimes written in an obfuscated form,
 * e.g. "jj (Dot) lebrun (At) mcgill (Dot) ca". That form cannot be used in a
 * mailto: link, so normalise it back to a real address.
 */
export function normalizeEmail(value: string): string {
  return value
    .replace(/\s*\(\s*at\s*\)\s*/gi, '@')
    .replace(/\s*\(\s*dot\s*\)\s*/gi, '.')
    .replace(/\s+/g, '')
    .trim()
}
