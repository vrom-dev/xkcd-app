import PageLayout from "components/PageLayout"
import { searchComics } from "services/search"

export default function Component({ query, results = [] }) {
  return (
    <PageLayout
    title='xkcd - Comics for developers'
    description={`Searching comic with #${query}`}
    >
        Resultados para {query}
        <ul>
        {
          results.map(result => <li key={result.id}>{result.title}</li>)
        }
        </ul>
      </PageLayout>
    )
  }
  
export async function getServerSideProps(context) {
  const { query } = context
  const { q = '' } = query

  const { results } = await searchComics(q)

  return {
    props: {
      query: q,
      results
    }
  }
}