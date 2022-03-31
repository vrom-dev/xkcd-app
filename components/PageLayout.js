import Head from 'next/head'

import Header from 'components/Header'
import { Footer } from 'components/Footer'

export default function PageLayout ({
  children, 
  title = 'nextXKCD', 
  description = 'Comic app with Next.js'
}) {
  return (
    <div >
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='max-w-3xl ml-auto mr-auto'>
      <Header />
      <main className='max-w-xl m-auto'>
        {children}
      </main>
      <Footer/>
      </div>
    </div>
  )
}