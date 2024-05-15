import Link from 'next/link'
import { socialLinks } from '../data/data'
import { CiSearch, CiUser } from 'react-icons/ci'
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoBagHandleOutline } from 'react-icons/io5'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { openCart, openWatchList } from '../lib/features/tabs/tabsSlice'

const Header = () => {
  const dispatch = useDispatch()

  interface cartProductType {
    id: number
    title: string
    price: number
    image: string[]
    discountedPrice: number | null
    count: number
    description: string
  }

  const { cartProducts, watchList } = useSelector((state: any) => state.tabs)
  const { user, isLoaded } = useSelector((state: any) => state.user)

  let cartCount = 0
  cartProducts &&
    cartProducts.forEach((product: cartProductType) => {
      cartCount += product.count
    })

  const returnRoute = () => {
    if (isLoaded) {
      if (user.email) {
        return 'user/profile'
      } else {
        return '/user/login'
      }
    } else {
      return ''
    }
  }

  return (
    <header className='flex flex-col gap-2'>
      <div className='flex items-center justify-between border-b px-20 pb-2.5 max-xsm:justify-center'>
        <nav className='flex items-center gap-2 max-lg:hidden'>
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
        <div className='flex items-center max-md:justify-center gap-1 text-[12px]'>
          <span className='font-medium text-sonicSilver'>FREE SHIPPING</span>
          <span>-</span>
          <p className='text-spanishGray'>THIS WEEK ORDER OVER $55</p>
        </div>
        <div className='max-md:hidden'></div>
      </div>
      <div className='flex items-center px-28 justify-between border-b pt-3 pb-5 max-lg:flex-col max-sm:gap-2'>
        <Link href='/'>
          <h1 className='text-[26px] font-bold'>Anon</h1>
        </Link>
        <p className='text-xl flex items-center max-md:text-[18px] max-sm:text-sm flex-wrap justify-center gap-2 welcome-text'>
          <span>Welcome to</span>
          <span className='text-salmonPink font-medium'>Anon</span>
          <span>ecommerce platform!</span>
        </p>

        <div className='flex items-center gap-4 max-lg:hidden'>
          <Link href={returnRoute()}>
            <CiUser className='text-3xl cursor-pointer icon-style' />
          </Link>
          <div className='relative'>
            <IoIosHeartEmpty
              onClick={(e) => {
                e.stopPropagation()
                dispatch(openWatchList())
              }}
              className='text-[27px] icon-style'
            />
            <div className='bg-salmonPink absolute text-white w-[15px] h-[15px] text-[12px] flex items-center justify-center rounded-full -top-[1px] -right-1'>
              {watchList.length}
            </div>
          </div>
          <div className='relative'>
            <IoBagHandleOutline
              className='text-[26.5px] icon-style'
              onClick={(e) => {
                e.stopPropagation()
                dispatch(openCart())
              }}
            />
            <div className='bg-salmonPink absolute text-white w-[17px] h-[17px] text-[12px] flex items-center justify-center rounded-full -top-[1px] -right-1'>
              {cartCount}
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  )
}
export default Header
