import Link from 'next/link'
import Image from 'next/image'

export default function SearchItem({ id, title, img, alt }) {
  return (
    <li className='hover:bg-slate-200 w-full p-2 justify-between flex gap-2'>
      <div className='flex items-center'>
        <Image src={img} height={50} width={50} objectFit='contain' alt={alt} />
      </div>
      <div className='flex-grow'>
        <Link href={`/comic/${id}`} >
          <a className='font-semibold text-xs'>
            {title}
            <p className='text-slate-500 font-normal'>{alt.substring(0, 40) + '...'}</p>
          </a>
        </Link>
      </div>
    </li>
  )
}