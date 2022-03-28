import { useRouter } from 'next/router'

import Header from '../components/Header'
import PageLayout from '../components/PageLayout'

export default function Home() {
  const router = useRouter()

  return (
    <PageLayout>
      <Header />
    </PageLayout>
  )
}
