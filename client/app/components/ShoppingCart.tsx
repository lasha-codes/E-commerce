import { HiArrowSmallRight } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'

interface tabsTypes {
  cartOpen: boolean
}

const ShoppingCart = () => {
  const { cartOpen }: tabsTypes = useSelector((state: any) => state.tabs)

  console.log(cartOpen)

  return (
    <div
      className={`fixed h-screen flex flex-col justify-between right-0 top-0 bg-white p-10 transition-all duration-500 ease-out ${
        cartOpen
          ? 'w-[500px] opacity-100 pointer-events-auto'
          : 'w-0 opacity-0 pointer-events-none'
      }`}
    >
      <div className='w-full flex justify-between items-center border-b pb-4'>
        <h3 className='font-semibold text-[14px]'>SHOPPING BAG ( 0 )</h3>
        <HiArrowSmallRight className='text-xl icon-style' />
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
