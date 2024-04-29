import {
  IoBagHandleOutline,
  IoHomeOutline,
  IoGridOutline,
} from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../lib/features/tabs/tabsSlice'
import { openSideBar, openWatchList } from '../lib/features/tabs/tabsSlice'
import Link from 'next/link'
import { RiUser3Line } from 'react-icons/ri'

const FooterNav = () => {
  const dispatch = useDispatch()
  const { cartProducts, watchList } = useSelector((state: any) => state.tabs)
  const { user, isLoaded } = useSelector((state: any) => state.user)

  interface cartProductType {
    id: number
    title: string
    price: number
    image: string[]
    discountedPrice: number | null
    count: number
    description: string
    type: string
  }

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
    <div className='hidden max-lg:block fixed bottom-0 left-[50%] translate-x-[-50%] md:w-[590px] max-md:left-0  max-md:translate-x-0 w-full rounded-t-xl max-md:rounded-none py-5 shadow-eerieBlack drop-shadow-xl border bg-[#ffffff]'>
      <nav className='flex items-center justify-between px-12'>
        <div>
          <Link href={returnRoute()}>
            <RiUser3Line className='text-3xl cursor-pointer icon-style' />
          </Link>
        </div>
        <div className='relative'>
          <IoBagHandleOutline
            className='text-3xl cursor-pointer icon-style'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(openCart())
            }}
          />
          <div className='absolute bg-salmonPink rounded-full w-[19px] h-[19px] flex items-center justify-center text-white text-sm -top-0.5 -right-1'>
            {cartCount}
          </div>
        </div>
        <div>
          <IoHomeOutline className='text-3xl cursor-pointer icon-style' />
        </div>
        <div className='relative'>
          <IoIosHeartEmpty
            onClick={(e) => {
              e.stopPropagation()
              dispatch(openWatchList())
            }}
            className='text-[32.5px] cursor-pointer icon-style'
          />
          <div className='absolute bg-salmonPink rounded-full w-[19px] h-[19px] flex items-center justify-center text-white text-sm -top-0.5 -right-1'>
            {watchList.length}
          </div>
        </div>
        <div>
          <IoGridOutline
            className='text-3xl cursor-pointer icon-style'
            onClick={(e) => {
              e.stopPropagation()
              dispatch(openSideBar())
            }}
          />
        </div>
      </nav>
    </div>
  )
}

export default FooterNav
