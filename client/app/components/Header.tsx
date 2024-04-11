import Link from 'next/link'
import { socialLinks } from '../data/data'

const Header = () => {
  return (
    <header>
      <div className='flex items-center justify-between border-b px-8 pb-2'>
        <nav className='flex items-center gap-2'>
          {socialLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              target='_blank'
              className='bg-cultured p-1 rounded hover:scale-105 active:scale-90 transition-all'
            >
              <link.icon className='text-sonicSilver' />
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-1 text-[12px]'>
          <span className='font-medium text-sonicSilver'>FREE SHIPPING</span>
          <span>-</span>
          <p className='text-spanishGray'>THIS WEEK ORDER OVER $55</p>
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Header
