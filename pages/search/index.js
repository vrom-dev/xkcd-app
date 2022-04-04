import PageLayout from "components/PageLayout"
import { useI18N } from "context/i18n"
import { searchComics } from "services/search"

export default function Component({ query, results = [] }) {
  const { t } = useI18N()
  return (
    <PageLayout
      title='xkcd - Comics for developers'
      description={`Searching comic with #${query}`}
    >
      {t('SEARCH_RESULTS_TITLE', { count: results.length }, results.length, query)}
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