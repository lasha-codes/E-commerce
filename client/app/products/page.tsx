'use client'

import { useDispatch, useSelector } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'

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
    <main className='w-full p-10'>
      <div className=''></div>
      <div className='flex items-start justify-center gap-5 flex-wrap'>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='bg-white border rounded-[8px] relative p-8 w-[400px] h-[420px] group flex flex-col justify-end items-start'
              >
                <div className='p-3 flex justify-center w-full h-[250px] absolute top-1 right-[10px] opacity-100 transition-all duration-300 group-hover:opacity-0'>
                  <img
                    className='w-[300px] h-full object-contain'
                    src={product.image[0]}
                    alt={`product image/${product.id}`}
                  />
                </div>
                <div className='p-3 flex justify-center w-full h-[250px] absolute top-1 right-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100'>
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
                            className='w-6 h-6'
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
              </div>
            )
          })}
      </div>
    </main>
  )
}

export default ProductsPage
