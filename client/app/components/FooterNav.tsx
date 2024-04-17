import {
  IoBagHandleOutline,
  IoHomeOutline,
  IoGridOutline,
} from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../lib/features/tabs/tabsSlice'
import { openSideBar, openWatchList } from '../lib/features/tabs/tabsSlice'

const FooterNav = () => {
  const dispatch = useDispatch()
  const { cartProducts } = useSelector((state: any) => state.tabs)

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

  return (
    <div className='hidden max-lg:block fixed bottom-0 left-[20%] md:w-[590px] w-full max-md:left-0 rounded-t-xl max-md:rounded-none py-5 shadow-eerieBlack drop-shadow-xl border bg-[#ffffff]'>
      <nav className='flex items-center justify-between px-12'>
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
            0
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
