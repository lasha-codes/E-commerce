import Link from 'next/link.js'
import { navigation } from '../data/data'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { user } = useSelector((state: any) => state.user)

  const returnNavigation = () => {
    if ((user.role = 'user')) {
      return (
        <div>
          {navigation.map((link: any, idx: number) => {
            return (
              <Link href={link.href} key={idx}>
                {link.link}
              </Link>
            )
          })}
        </div>
      )
    }
  }

  return (
    <nav className='flex items-center gap-7 w-full justify-center py-3 max-md:hidden'>
      {
        (user.role = 'user'
          ? navigation.map((item, idx) => {
              return (
                <Link href={item.href} key={idx} className='links'>
                  {item.link}
                </Link>
              )
            })
          : user.role)
      }
    </nav>
  )
}

export default Navbar
