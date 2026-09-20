import { getCollection } from 'astro:content'

/**
 * The research topics that appear in a listing.
 *
 * Three entries — the Québec Science top 10, Watch/Learn/Vote, and "new hope
 * for an existing drug" — exist in both the research and the news collection,
 * and both copies have had their own web address since the Gatsby site, so
 * neither file can be deleted without breaking a link somebody may have saved.
 * Instead the research copy carries `unlisted`, which keeps its page and its
 * address but drops it from the Research page and the homepage. Dr. Lebrun
 * sets that flag per topic in the CMS.
 */
export const listedTopics = async () =>
  (await getCollection('research')).filter((topic) => !topic.data.unlisted)
