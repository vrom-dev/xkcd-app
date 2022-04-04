import { useI18N } from 'context/i18n'
import Link from 'next/link'
import { useState, useRef } from 'react'

import SearchItem from './SearchItem'

export default function Search() {
  const [results, setResults] = useState([])
  const searchRef = useRef()
  const { t } = useI18N()
  const q = searchRef.current?.value

  const handleChange = () => {
    fetch(`/api/search?q=${q}`)
      .then(res => res.json())
      .then(setResults)
  }

  return (
    <>
      <input ref={searchRef} type='text' onChange={handleChange} placeholder={t('SEARCH_PLACEHOLDER')} className='rounded-full p-1 pl-4 pr-3 border-2 border-gray-200 transition-all outline-none focus:border-gray-400 text-sm' />
      {
        Boolean(results.length) && <ul className='absolute top-10 left-0 bg-slate-50 w-full rounded-md z-10 overflow-hidden shadow-mpun'>
          <li className='hover:bg-slate-200 w-full p-2 justify-between flex gap-2'>
            <Link href={`/search?q=${q}`} >
              <a className='italic text-xs'>
                {t('SEE_ALL_RESULTS', {}, results.length)}
              </a>
            </Link>
          </li>
          {
            results.map(result => <SearchItem {...result} key={result.id} />)
          }
        </ul>
      }
    </>
  )
}