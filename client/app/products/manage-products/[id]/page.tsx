'use client'

import { useSelector } from 'react-redux'
import { Skeleton } from '@/components/ui/skeleton'

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

const UpdateSingleProduct = ({ params }: { params: { id: string } }) => {
  const { products }: { products: productType[] } = useSelector(
    (state: any) => state.product
  )

  const updateByIdProduct =
    products.length > 0 &&
    products.find((product: productType) => {
      return product.id === parseInt(params.id)
    })

  console.log(params)

  return (
    <main className='w-full p-10'>
      <div className='w-full flex justify-center'>
        {updateByIdProduct ? (
          <div>
            <div className='w-[250px] h-[350px]'>
              <img
                src={updateByIdProduct.image[0]}
                className='w-full h-full object-contain'
                alt='Updating Product Image'
              />
            </div>
          </div>
        ) : (
          <Skeleton className='w-[500px] h-[400px] bg-slate-600' />
        )}
      </div>
    </main>
  )
}

export default UpdateSingleProduct
