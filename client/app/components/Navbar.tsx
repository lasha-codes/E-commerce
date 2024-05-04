import Link from 'next/link.js'
import { AdminNavigation, navigation, VendorNavigation } from '../data/data'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user } = useSelector((state: any) => state.user)

  const returnNavigation = () => {
    if (user.role === 'user') {
      return (
        <nav className='flex items-center gap-7 w-full justify-center py-3 max-md:hidden'>
          {navigation.map((link: any, idx: number) => {
            return (
              <Link href={link.href} key={idx} className='links'>
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else if (user.role === 'admin') {
      return (
        <nav className='flex items-center gap-7 w-full justify-center py-3 max-md:hidden'>
          {AdminNavigation.map((link: any, idx: number) => {
            return (
              <Link href={link.href} key={idx} className='links'>
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else if (!user.role) {
      return (
        <nav
          className='flex items-center gap-7 w-full 
        justify-center py-3 max-md:hidden'
        >
          {navigation.map((link: any, idx: number) => {
            return (
              <Link href={link.href} key={idx} className='links'>
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else {
      return (
        <nav className='flex items-center gap-7 w-full justify-center py-3 max-md:hidden'>
          {VendorNavigation.map((link: any, idx: number) => {
            return (
              <Link href={link.href} key={idx} className='links'>
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    }
  }

  return <nav>{returnNavigation()}</nav>
}

export default Navbar
