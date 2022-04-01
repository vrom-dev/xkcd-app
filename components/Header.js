import Link from 'next/link'

import Search from './Search'

export default function Header() {


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
              <a className='transition-opacity hover:opacity-80'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='transition-opacity hover:opacity-80'>
                About
              </a>
            </Link>
          </li>
          <li className='relative'>
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  )
}