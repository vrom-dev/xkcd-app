import Link from "next/link"

export default function Header() {
  return (
    <header className='p-2'>
      <nav className='flex justify-between'>
      <Link href='/'>
        <a className='transition-opacity hover:opacity-80'>
          <h1 className='font-bold'>next<span className="font-light">xkcd</span></h1> 
        </a>
      </Link>
        <ul className='flex gap-2'>
          <a className='transition-opacity hover:opacity-80'>
            <li>
              <Link href='/'>Home</Link>
            </li>
          </a>
          <a className='transition-opacity hover:opacity-80'>
            <li>
              <Link href='/search'>Search</Link>
            </li>
          </a>
          <a className='transition-opacity hover:opacity-80'>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </a>
        </ul>
      </nav>
    </header>
  )
}