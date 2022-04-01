import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex('prod_xkcd');

const CACHE = {}

export async function searchComics(query) {
  if (!query) return { results: [] }
  if (CACHE[query]) return { results: CACHE[query] }
  const { hits } = await index.search(query, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10
  })

  CACHE[query] = hits
  return { results: hits }
}