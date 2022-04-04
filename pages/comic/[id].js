import fs from 'fs/promises'
import path from 'path'

import Image from 'next/image'
import Link from 'next/link'

import PageLayout from 'components/PageLayout'
import { useI18N } from 'context/i18n'

export default function Comic({
  id,
  img,
  alt,
  title,
  width,
  height,
  nextId,
  prevId,
  hasNext,
  hasPrevious
}) {
  const { t } = useI18N()

  return (
    <PageLayout
      title='xkcd - Comics for developers'
      description={`Comic #${id}`}
    >
      <h2 className='text-2xl font-bold text-center mt-5 mb-5'>{`Comic #${id}: ${title}`}</h2>
      <section className='text-center max-w-sm m-auto'>
        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
          objectFit='contain'
        />
        <p className='m-3'>{alt}</p>
      </section>
      <div className='flex justify-between m-5'>
        {hasPrevious &&
          <Link href={`/comic/${prevId}`}>
            <a className='text-gray-600'>⬅ {t('PREVIOUS')}</a>
          </Link>}
        {hasNext &&
          <Link href={`/comic/${nextId}`}>
            <a className='text-gray-600'>{t('NEXT')} ➡</a>
          </Link>}
      </div>
    </PageLayout>
  )
}

export async function getStaticPaths({ locales }) {
  const files = await fs.readdir('./data')
  let paths = []

  locales.forEach(locale => {
    paths = paths.concat(files.map(file => {
      const id = path.basename(file, '.json')
      return { params: { id }, locale }
    }))
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const file = await fs.readFile(`./data/${params.id}.json`, 'utf-8')
  const comic = await JSON.parse(file)

  const idNumber = +params.id
  const prevId = idNumber - 1
  const nextId = idNumber + 1

  const [previousResult, nextResult] = await Promise.allSettled([
    fs.stat(`./data/${prevId}.json`),
    fs.stat(`./data/${nextId}.json`)
  ])

  const hasPrevious = previousResult.status === 'fulfilled'
  const hasNext = nextResult.status === 'fulfilled'


  return {
    props: {
      ...comic,
      hasPrevious,
      hasNext,
      prevId,
      nextId
    }
  }
}