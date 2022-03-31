import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_API_KEY);
const index = client.initIndex('prod_xkcd');

export async function searchComics (query) {
  const { hits } = await index.search(query, {
    attributesToRetrieve: ['id', 'title', 'img', 'alt'],
    hitsPerPage: 10
  })
  return { results: hits }
}