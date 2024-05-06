import { useSelector, useDispatch } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'
import {
  IoEyeOutline,
  IoGitCompareOutline,
  IoBagAddOutline,
} from 'react-icons/io5'
import { addItemToCart, addToWatchList } from '../lib/features/tabs/tabsSlice'
import { Toaster } from 'sonner'
import Link from 'next/link'
import { addProductToCompare } from '../lib/features/products/productSlice'

const NewProducts = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)
  const { watchList } = useSelector((state: any) => state.tabs)

  interface ProductType {
    id: number
    sold: number
    price: number
    image: string[]
    discountedprice: null | number
    title: string
    description: string
    count: number
    rating: number[]
    type: string
    date: string
  }

  const getRating = (ratingArr: number[]) => {
    if (ratingArr.length === 0) {
      return <span className='uppercase'>Not Rated</span>
    } else {
      const ratingTotal = ratingArr.reduce((acc, num) => acc + num, 0)
      const ratingAverage = ratingTotal
      return Math.round(ratingAverage / ratingArr.length)
    }
  }

  const newProducts =
    products &&
    [...products]
      .sort((a: ProductType, b: ProductType) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
      .slice(0, 10)

  const starsArray = [1, 2, 3, 4, 5]

  return (
    <div className='w-full p-10 flex flex-col items-start'>
      <div className='flex items-start justify-center flex-wrap gap-12'>
        <h1 className='mb-6 text-xl text-eerieBlack font-medium w-full text-center'>
          Newest
        </h1>

        {newProducts &&
          newProducts.map((product: ProductType) => {
            const inWatchList =
              watchList &&
              watchList.find((liked: ProductType) => {
                return product.id === liked.id
              })

            return (
              <div
                key={product.id}
                className='bg-white overflow-hidden border w-[300px] flex justify-end flex-col items-start h-[420px] group rounded-[10px] py-10 px-7 relative'
              >
                <div className='p-3 w-full flex justify-center'>
                  <img
                    alt='product image'
                    src={product.image[0]}
                    className='h-[160px] w-[160px] object-contain absolute top-6 group-hover:opacity-0 transition-all duration-300 ease'
                  />
                  <img
                    alt='product image'
                    src={product.image[1]}
                    className='h-[160px] w-[160px] object-contain absolute opacity-0 group-hover:opacity-100 transition-all top-5 duration-300 ease'
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='uppercase text-salmonPink text-[12.5px] font-medium'>
                    {product.type}
                  </span>
                  <h2 className='text-[16px] text-sonicSilver font-light'>
                    {product.title}
                  </h2>
                  <div className='flex items-center'>
                    {Number(getRating(product.rating)) ? (
                      starsArray.map((star: any) => {
                        return (
                          <svg
                            key={star}
                            xmlns='http://www.w3.org/2000/svg'
                            fill={
                              star <= getRating(product.rating)
                                ? 'black'
                                : 'none'
                            }
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                            />
                          </svg>
                        )
                      })
                    ) : (
                      <span className='text-eerieBlack filter'>Not Rated</span>
                    )}
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='flex items-center font-bold'>
                      <LuDollarSign />
                      {product.discountedprice
                        ? product.discountedprice
                        : product.price}
                    </span>
                    {product.discountedprice && (
                      <span className='flex text-[15px] items-center relative text-sonicSilver'>
                        <LuDollarSign />
                        {product.price}
                        <div className='absolute top-[11px] left-[1px] w-full h-[1px] bg-sonicSilver' />
                      </span>
                    )}
                  </div>
                </div>
                <div className='absolute right-3 translate-x-[55px] top-3 flex flex-col items-center gap-2 group-hover:translate-x-0 transition-all duration-300'>
                  <div
                    onClick={() => dispatch(addToWatchList(product))}
                    className='p-1.5 border rounded icon-style'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill={inWatchList ? 'hsl(0, 0%, 47%)' : 'none'}
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='hsl(0, 0%, 47%)'
                      className='w-[21px] h-[21px]'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                      />
                    </svg>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className='p-1.5 rounded border icon-style'
                  >
                    <IoEyeOutline className='text-sonicSilver text-xl' />
                  </Link>
                  <div className='border rounded icon-style p-1.5'>
                    <IoGitCompareOutline
                      onClick={() => dispatch(addProductToCompare(product))}
                      className='text-xl text-sonicSilver'
                    />
                  </div>
                  <div
                    onClick={() => dispatch(addItemToCart(product))}
                    className='p-1.5 border rounded icon-style'
                  >
                    <IoBagAddOutline className='text-sonicSilver text-xl' />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Toaster />
    </div>
  )
}

export default NewProducts
