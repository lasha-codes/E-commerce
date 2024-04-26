'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5'
import SelectCompareProduct from '@/app/components/SelectCompareProduct'
import {
  openFirstTab,
  openSecondTab,
  removeProductFromComparison,
  closeTab,
} from '@/app/lib/features/products/productSlice'

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
      </section>
    </main>
  )
}

export default ProductCompare
