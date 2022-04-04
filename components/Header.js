import { useI18N } from 'context/i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Search from './Search'

export default function Header() {
  const { t } = useI18N()
  const { locale, locales } = useRouter()
  const restOfLocales = locales.filter(l => l !== locale)

  return (
    <header className='p-2'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <a className='transition-opacity hover:opacity-80'>
            <h1 className='font-bold'>next<span className='font-light'>xkcd</span></h1>
          </a>
        </Link>
        <ul className='flex gap-2 items-center'>
          <li>
            <Link href='/'>
              <a className='font-bold text-sm transition-opacity hover:opacity-80'>
                {t('HOME')}
              </a>
            </Link>
          </li>
          <li className='relative'>
            <Search />
          </li>
          <li className='relative'>
            <Link href='/' locale={restOfLocales[0]}>
              <a className='font-bold text-sm transition-opacity hover:opacity-80'>
                {restOfLocales[0].toUpperCase()}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}