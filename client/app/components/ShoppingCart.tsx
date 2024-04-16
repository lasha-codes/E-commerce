import { HiArrowSmallRight } from 'react-icons/hi2'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  closeCart,
  decreaseProductQTY,
  increaseProductQuantity,
  removeProductFromTheCart,
  clearCart,
} from '../lib/features/tabs/tabsSlice'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import { IoIosClose } from 'react-icons/io'

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

interface tabsTypes {
  cartOpen: boolean
  cartProducts: cartProductType[]
}

const ShoppingCart = () => {
  const dispatch = useDispatch()
  const { cartOpen, cartProducts }: tabsTypes = useSelector(
    (state: any) => state.tabs
  )

  let cartCount = 0
  let totalPrice = 0

  cartProducts &&
    cartProducts.forEach((product: cartProductType) => {
      cartCount += product.count
    })

  cartProducts &&
    cartProducts.forEach((product: cartProductType) => {
      totalPrice += product.count * product.price
    })

  console.log(cartCount)

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      className={`fixed h-screen max-lg:duration-1000 flex overflow-hidden max-xsm:overflow-y-scroll flex-col right-0 top-0 bg-white p-10 transition-all duration-700 ease-in-out w-[500px] max-sm:w-full z-[99]  ${
        cartOpen
          ? 'translate-x-0 pointer-events-auto'
          : 'translate-x-[550px] pointer-events-none max-lg:translate-x-[750px]'
      }`}
    >
      <div className='w-full flex justify-between items-center border-b pb-4'>
        <h3 className='font-semibold text-[14px]'>
          SHOPPING BAG ( {cartCount} )
        </h3>
        <HiArrowSmallRight
          className='text-xl icon-style'
          onClick={() => dispatch(closeCart())}
        />
      </div>

      <div className='flex flex-col gap-0.5'>
        {cartProducts &&
          cartProducts.map((product: cartProductType) => {
            return (
              <div
                key={product.id}
                className='border-b cart-product pb-4 pt-6 relative'
              >
                <IoIosClose
                  onClick={() => dispatch(removeProductFromTheCart(product))}
                  className='absolute top-2 right-2 text-2xl text-sonicSilver transition-all duration-500 hover:text-[#f55c5c] icon-style cursor-pointer'
                />
                <div className='flex items-center gap-5'>
                  <div className='min-w-[100px] max-w-[100px] h-[80px] '>
                    <img
                      src={product.image[0]}
                      className='w-full h-full object-contain'
                      alt='cart-product'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-medium max-w-[270px] text-eerieBlack text-[15px]'>
                        {product.title}
                      </h3>
                      <span className='uppercase py-[6px] text-[13px] text-salmonPink font-medium'>
                        {product.type}
                      </span>
                    </div>
                    <div className='flex items-center gap-4'>
                      <div className='border rounded-[3px] flex items-center justify-between px-2 py-1 w-[85px]'>
                        <button
                          onClick={() =>
                            dispatch(
                              increaseProductQuantity({ id: product.id })
                            )
                          }
                          className='text-sm text-eerieBlack icon-style'
                        >
                          <FaPlus />
                        </button>
                        <span className='text-eerieBlack font-medium'>
                          {product.count}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(decreaseProductQTY({ id: product.id }))
                          }
                          className='text-sm text-eerieBlack icon-style'
                        >
                          <FaMinus />
                        </button>
                      </div>
                      <div className='flex items-center gap-5'>
                        <span className='flex items-center text-sonicSilver'>
                          ${product.price.toFixed(2)}
                        </span>
                        <span className='font-medium text-eerieBlack'>
                          ${(product.price * product.count).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className='w-full flex mt-auto flex-col gap-7 border-t pt-6'>
        <div className='flex justify-between items-center'>
          <span className='flex items-center gap-2 font-medium'>
            <span className='text-[16px]'>TOTAL: </span>
            <span className='text-[18px]'>$ {totalPrice.toFixed(2)}</span>
          </span>
          <button
            onClick={() => dispatch(clearCart())}
            className='bg-[#f33c3cf5] p-3 rounded-[1px] cursor-pointer hover:opacity-80 transition-all duration-300'
          >
            <FaRegTrashAlt className='text-white' />
          </button>
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
    </section>
  )
}

export default ShoppingCart
