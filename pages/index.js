import fs from 'fs/promises'

import Link from 'next/link'
import Image from 'next/image'

import PageLayout from 'components/PageLayout'

export default function Home({ latestComics }) {

  return (
    <PageLayout
      title='xkcd - Comics for developers'
      description='Comics for developers'
    >
      <h2 className='text-2xl font-bold text-center mt-5 mb-5'>Latest Comics</h2>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {
          latestComics.map(comic => {
            return (
            <Link 
              key={comic.id} 
              href={`/comic/${comic.id}`}
            >
              <a className='m-auto mb-4 pb-4'>
                <h3 className='font-bold text-sm text-center mb-5'>{comic.title}</h3>
                <Image 
                  src={comic.img} 
                  alt={comic.alt}
                  width={comic.width}
                  height={comic.height}
                  objectFit='contain'
                />
              </a>
            </Link>
            )
          })
        }
      </section>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const files = await fs.readdir('./data')
  const latestComicsFiles = files.slice(-8, files.length)
  
  const readFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./data/${file}`, 'utf-8')
    return JSON.parse(content)
  })
  const latestComics = await Promise.all(readFiles)
  return {
    props: {
      latestComics
    }
  }
}