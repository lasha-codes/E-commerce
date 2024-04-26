'use client'

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { IoAddOutline } from 'react-icons/io5'
import SelectCompareProduct from '@/app/components/SelectCompareProduct'

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
        <div className='min-w-[500px] cursor-pointer h-[400px] max-md:min-w-full border rounded max-md:h-[350px] max-sm:h-[290px] flex items-center justify-center'>
          <IoAddOutline className='text-[80px]' />
          <SelectCompareProduct addIndex={0} position='top-0 left-0' />
        </div>

        <div className='min-w-[500px] cursor-pointer h-[400px] max-md:min-w-full border max-md:h-[350px] max-sm:h-[290px] rounded flex items-center justify-center'>
          <IoAddOutline className='text-[80px]' />
        </div>
      </section>
    </main>
  )
}

export default ProductCompare
