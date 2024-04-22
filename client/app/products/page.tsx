'use client'

import { useDispatch, useSelector } from 'react-redux'

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

  return (
    <main className='w-full p-10'>
      <div className=''></div>
      <div className='flex items-start justify-center gap-5 flex-wrap'>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='bg-white border rounded-[8px] p-8 w-[400px] flex flex-col justify-center items-start'
              >
                <div className='p-3 flex justify-center w-full h-[250px]'>
                  <img
                    className='w-[300px] h-full object-contain'
                    src={product.image[0]}
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
                </div>
              </div>
            )
          })}
      </div>
    </main>
  )
}

export default ProductsPage
