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
  const { products }: { products: productType[] } = useSelector(
    (state: any) => state.product
  )
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
      <section className='mt-[100px]'>
        <div className='flex items-center flex-wrap justify-center gap-5'>
          {products &&
            products.map((product: productType) => {
              return (
                <div
                  key={product.id}
                  className='flex items-start justify-start w-[350px] gap-5'
                >
                  <div className='h-[100px] w-[180px]'>
                    <img
                      src={product.image[0]}
                      alt='Product Image'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div>
                    <h2 className='text-[15px] text-sonicSilver w-[230px]'>
                      {product.title}
                    </h2>
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </main>
  )
}

export default ManageProducts
