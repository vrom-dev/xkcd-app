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
            <li>
              <Link href='/'>
                <a className='transition-opacity hover:opacity-80'>
                    Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/search'>
                <a className='transition-opacity hover:opacity-80'>
                    Search
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
        </ul>
      </nav>
    </header>
  )
}