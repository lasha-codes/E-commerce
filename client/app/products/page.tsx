'use client'

import { useDispatch, useSelector } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'
import { Toaster } from 'sonner'
import {
  IoEyeOutline,
  IoBagAddOutline,
  IoGitCompareOutline,
} from 'react-icons/io5'
import Link from 'next/link'
import { addItemToCart } from '../lib/features/tabs/tabsSlice'
import { addToWatchList } from '../lib/features/tabs/tabsSlice'
import { itemFilterData } from '../data/data'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
  rating: number[]
}

const ProductsPage = () => {
  const dispatch = useDispatch()
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )
  const { watchList }: { watchList: ProductType[] } = useSelector(
    (state: any) => state.tabs
  )

  const getRating = (ratingArr: number[]) => {
    if (ratingArr.length === 0) {
      return <span className='uppercase'>Not Rated</span>
    } else {
      const ratingTotal = ratingArr.reduce((acc, num) => acc + num, 0)
      const ratingAverage = ratingTotal
      return Math.round(ratingAverage / ratingArr.length)
    }
  }

  const starsArr = [1, 2, 3, 4, 5]

  return (
    <main className='w-full flex items-start justify-between px-10 py-16'>
      <header className='fixed top-3'>
        <Link href='/' className='text-2xl font-medium text-eerieBlack'>
          Anon
        </Link>
      </header>
      <div className=''>
        {itemFilterData.map((item, idx: number) => {
          return (
            <div key={idx} className='relative w-[18px] h-[18px]'>
              <input
                type='checkbox'
                className='h-full w-full filter-checkbox'
              />
              <span className='checked-span'></span>
            </div>
          )
        })}
      </div>
      <div className='flex items-start justify-center gap-5 flex-wrap'>
        {products &&
          products.map((product: ProductType) => {
            const inWatchList =
              watchList &&
              watchList.find((liked: ProductType) => {
                return liked.id === product.id
              })
            return (
              <div
                key={product.id}
                className='bg-white overflow-hidden border rounded-[8px] relative p-8 w-[300px] h-[330px] group flex flex-col justify-end items-start'
              >
                <div className='p-3 flex justify-center w-full h-[140px] absolute top-2 right-[10px] opacity-100 transition-all duration-300 group-hover:opacity-0'>
                  <img
                    className='w-[300px] h-full object-contain'
                    src={product.image[0]}
                    alt={`product image/${product.id}`}
                  />
                </div>
                <div className='p-3 flex justify-center w-full h-[140px] absolute top-2 right-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <img
                    className='w-[300px] h-full object-contain'
                    src={product.image[1]}
                    alt={`product image/${product.id}`}
                  />
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <span className='uppercase text-salmonPink text-sm font-medium'>
                    {product.type}
                  </span>
                  <h2 className='text-sonicSilver text-[15px]'>
                    {product.title}
                  </h2>
                  <div className='flex items-center'>
                    {product.rating.length !== 0 ? (
                      starsArr.map((star: any) => {
                        return (
                          <svg
                            key={star}
                            xmlns='http://www.w3.org/2000/svg'
                            fill={
                              Number(getRating(product.rating)) &&
                              star <= getRating(product.rating)
                                ? 'black'
                                : 'none'
                            }
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-[21px] h-[21px]'
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
                      <span className='text-eerieBlack text-[15px]'>
                        Not Rated
                      </span>
                    )}
                  </div>
                  <div className='flex items-center font-semibold'>
                    <LuDollarSign />
                    <span>{product.price}</span>
                  </div>
                </div>
                <div className='absolute group-hover:translate-x-0 transition-all duration-300 top-3 right-3 flex flex-col items-center gap-2 translate-x-[50px]'>
                  <div
                    onClick={() => dispatch(addToWatchList(product))}
                    className='icon-style border rounded p-1'
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
                    className='icon-style border p-1 rounded'
                  >
                    <IoEyeOutline className='text-xl text-sonicSilver' />
                  </Link>
                  <div className='icon-style p-1 border rounded'>
                    <IoGitCompareOutline className='text-xl text-sonicSilver' />
                  </div>
                  <div
                    onClick={() => dispatch(addItemToCart(product as any))}
                    className='icon-style p-1 border rounded'
                  >
                    <IoBagAddOutline className='text-xl text-sonicSilver' />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Toaster />
    </main>
  )
}

export default ProductsPage
