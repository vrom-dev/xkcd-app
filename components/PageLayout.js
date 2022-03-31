import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function PageLayout ({
  children, 
  title = 'nextXKCD', 
  description = 'Comic app with Next.js'
}) {
  return (
    <div className={`${styles.container} max-w-3xl ml-auto mr-auto `}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}