import Link from 'next/link.js'
import { navigation } from '../data/data'

const Navbar = () => {
  return (
    <nav className='flex items-center gap-7 w-full justify-center py-3 max-md:hidden'>
      {navigation.map((item, idx) => {
        return (
          <Link href={item.href} key={idx} className='links'>
            {item.link}
          </Link>
        )
      })}
    </nav>
  )
}

export default Navbar
