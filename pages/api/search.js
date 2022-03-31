// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchComics } from 'services/search'

export default async function search (req, res) {
  const { query } = req
  const { results } = await searchComics(query.q)
  return res.status(200).json(results)
}
