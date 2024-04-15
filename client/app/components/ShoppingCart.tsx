import { HiArrowSmallRight } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'

const ShoppingCart = () => {
  return (
    <div className='fixed h-screen right-0 top-0 w-[500px] bg-white px-10 py-7'>
      <div className='w-full flex justify-between items-center border-b pb-4'>
        <h3 className='font-semibold text-[14px]'>SHOPPING BAG (0)</h3>
        <HiArrowSmallRight className='text-xl icon-style' />
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
          <span>TOTAL: $ 0.00</span>
          <div className='bg-bitterSweet p-3 rounded-[2.5px] cursor-pointer'>
            <FaRegTrashAlt className='text-white' />
          </div>
        </div>
        <div>
          <button>View cart</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
