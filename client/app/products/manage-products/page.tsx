'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'

interface productType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
}

const ManageProducts = () => {
  const { products } = useSelector((state: any) => state.product)
  return (
    <main className='w-full p-10'>
      <header className='absolute top-5'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='text-2xl font-medium'>
            Anon
          </Link>
          <div className='h-[20px] w-[2px] bg-spanishGray' />
          <span className='text-sonicSilver text-sm'>Product Management</span>
        </div>
      </header>
      <section className=''></section>
    </main>
  )
}

export default ManageProducts
