'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5'
import SelectCompareProduct from '@/app/components/SelectCompareProduct'
import {
  openFirstTab,
  openSecondTab,
  removeProductFromComparison,
} from '@/app/lib/features/products/productSlice'
import { FiDollarSign } from 'react-icons/fi'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
  sold: number
}

const ProductCompare = () => {
  const dispatch = useDispatch()

  const {
    compareProducts,
    firstCompareOpened,
    secondCompareOpened,
  }: {
    compareProducts: ProductType[]
    firstCompareOpened: boolean
    secondCompareOpened: boolean
  } = useSelector((state: any) => state.product)

  const firstProductRating: any =
    compareProducts[0].rating?.length > 0
      ? compareProducts[0].rating.reduce((num, acc) => {
          return num + acc
        }, 0)
      : 'Not Rated'

  const secondProductRating: any =
    compareProducts[1].rating?.length > 0
      ? compareProducts[1].rating.reduce((num, acc) => {
          return num + acc
        }, 0)
      : 'Not Rated'

  const compareProductsPrice = (idx: number, compareToIdx: number) => {
    if (compareProducts[compareToIdx]) {
      if (compareProducts[idx].price > compareProducts[compareToIdx].price) {
        return 'text-green-500'
      } else if (
        compareProducts[idx].price === compareProducts[compareToIdx].price
      ) {
        return 'text-yellow-400'
      } else {
        return 'text-red-500'
      }
    } else {
      return 'text-eerieBlack'
    }
  }

  const compareProductsSales = (idx: number, compareToIdx: number) => {
    if (compareProducts[compareToIdx]) {
      if (compareProducts[idx].sold > compareProducts[compareToIdx].sold) {
        return 'text-green-500'
      } else if (
        compareProducts[idx].sold === compareProducts[compareToIdx].sold
      ) {
        return 'text-yellow-400'
      } else {
        return 'text-red-500'
      }
    } else {
      return 'text-eerieBlack'
    }
  }

  const compareProductsRatingFirst = () => {
    if (Number(secondProductRating)) {
      if (firstProductRating > secondProductRating) {
        return 'text-green-500'
      } else if (firstProductRating === secondProductRating) {
        return 'text-yellow-400'
      } else {
        return 'text-red-500'
      }
    } else {
      return 'text-eerieBlack'
    }
  }

  return (
    <main className='w-full py-5'>
      <header className='px-8'>
        <div className='flex items-center gap-3'>
          <Link href='/' className='text-eerieBlack font-medium text-2xl'>
            Anon
          </Link>
          <div className='h-[22px] w-[2px] bg-spanishGray' />
          <span className='text-sonicSilver opacity-85 text-[15px]'>
            Compare Products
          </span>
        </div>
      </header>
      <section className='w-full px-20 flex justify-center flex-wrap items-center gap-10 mt-28 mb-5'>
        <div className='flex flex-col items-start gap-5'>
          <div className='min-w-[500px] cursor-pointer h-[400px] max-md:min-w-full border rounded max-md:h-[350px] relative max-sm:h-[290px] flex items-center justify-center'>
            {!compareProducts[0] ? (
              <IoAddOutline
                onClick={() => dispatch(openFirstTab())}
                className='text-[80px]'
              />
            ) : (
              <div className='relative'>
                <img
                  src={compareProducts[0].image[0]}
                  className='w-[350px] h-[330px] object-contain'
                />
                <IoCloseOutline
                  onClick={() =>
                    dispatch(removeProductFromComparison({ idx: 0 }))
                  }
                  className='absolute top-0 right-0 text-lg hover:text-red-700 transition-all duration-300'
                />
              </div>
            )}
            <SelectCompareProduct
              opened={firstCompareOpened}
              addIndex={0}
              position='left-12'
            />
          </div>
          {compareProducts[0] && (
            <div className='flex flex-col gap-3'>
              <p className='flex items-start gap-1.5 max-w-[500px]'>
                <span>Title:</span>
                <span className='text-sonicSilver text-[16px]'>
                  {compareProducts[0].title}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Type:</span>
                <span className='uppercase text-[15px] font-medium'>
                  {compareProducts[0].type}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Price:</span>
                <span
                  className={`flex items-center font-semibold ${compareProductsPrice(
                    0,
                    1
                  )}`}
                >
                  <FiDollarSign />
                  {compareProducts[0].price}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Sales:</span>
                <span className={`${compareProductsSales(0, 1)}`}>
                  {compareProducts[0].sold}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Rating:</span>
                <span className={`${compareProductsRatingFirst()}`}>
                  {Number(firstProductRating)
                    ? (
                        firstProductRating / compareProducts[0].rating.length
                      ).toFixed(1)
                    : 'Not Rated'}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className='flex flex-col items-start gap-5'>
          <div className='min-w-[500px] relative cursor-pointer h-[400px] max-md:min-w-full border max-md:h-[350px] max-sm:h-[290px] rounded flex items-center justify-center'>
            {!compareProducts[1] ? (
              <IoAddOutline
                onClick={() => dispatch(openSecondTab())}
                className='text-[80px]'
              />
            ) : (
              <div className='relative'>
                <img
                  src={compareProducts[1].image[1]}
                  className='w-[350px] h-[330px] object-contain'
                />
                <IoCloseOutline
                  onClick={() =>
                    dispatch(removeProductFromComparison({ idx: 1 }))
                  }
                  className='absolute top-0 right-0 text-lg hover:text-red-700 transition-all duration-300'
                />
              </div>
            )}

            <SelectCompareProduct
              opened={secondCompareOpened}
              addIndex={1}
              position='left-12'
            />
          </div>
          {compareProducts[1] && (
            <div className='flex flex-col gap-3'>
              <p className='flex items-start gap-1.5 max-w-[500px]'>
                <span>Title:</span>
                <span className='text-sonicSilver text-[16px]'>
                  {compareProducts[1].title}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Type:</span>
                <span className='uppercase text-[15px] font-medium'>
                  {compareProducts[1].type}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Price:</span>
                <span
                  className={`flex items-center font-semibold ${compareProductsPrice(
                    1,
                    0
                  )}`}
                >
                  <FiDollarSign />
                  {compareProducts[1].price}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Sales:</span>
                <span className={`${compareProductsSales(1, 0)}`}>
                  {compareProducts[1].sold}
                </span>
              </p>
              <p className='flex items-center gap-1.5'>
                <span>Rating:</span>
                <span>
                  {Number(secondProductRating)
                    ? (
                        secondProductRating / compareProducts[1].rating.length
                      ).toFixed(1)
                    : 'Not Rated'}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default ProductCompare
