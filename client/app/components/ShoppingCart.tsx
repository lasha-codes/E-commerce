import { HiArrowSmallRight } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../lib/features/tabs/tabsSlice'

interface tabsTypes {
  cartOpen: boolean
}

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const { cartOpen }: tabsTypes = useSelector((state: any) => state.tabs)

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed h-screen max-lg:duration-1000 flex overflow-hidden max-sm:overflow-y-scroll flex-col justify-between right-0 top-0 bg-white p-10 transition-all duration-700 ease-in-out w-[500px] max-md:w-full z-[99]  ${
        cartOpen
          ? 'translate-x-0 pointer-events-auto'
          : 'translate-x-[550px] pointer-events-none max-lg:translate-x-[750px]'
      }`}
    >
      <div className='w-full flex justify-between items-center border-b pb-4'>
        <h3 className='font-semibold text-[14px]'>SHOPPING BAG ( 0 )</h3>
        <HiArrowSmallRight
          className='text-xl icon-style'
          onClick={() => dispatch(closeCart())}
        />
      </div>
      <div className='w-full flex flex-col gap-7 border-t pt-6'>
        <div className='flex justify-between items-center'>
          <span className='flex items-center gap-2 font-medium'>
            <span className='text-[16px]'>TOTAL: </span>
            <span className='text-[18px]'>$ 0.00</span>
          </span>
          <div className='bg-[#f33c3cf5] p-3 rounded-[1px] cursor-pointer hover:opacity-80 transition-all duration-300'>
            <FaRegTrashAlt className='text-white' />
          </div>
        </div>
        <div className='flex flex-col gap-2.5'>
          <button className='bg-cultured font-medium text-[16px] py-3 text-eerieBlack rounded-[2px]'>
            View cart
          </button>
          <button className='text-white bg-eerieBlack text-[16px] py-3 rounded-[2px]'>
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
