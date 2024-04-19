'use client'

import { useSelector } from 'react-redux'

interface ParamsType {
  params: {
    id: any
  }
}

interface productType {
  id: number
  title: string
  description: string
  sold: number
  price: number
  discountedPrice: number | null
  image: string[]
  type: string
}

interface selectTypes {
  products: productType[]
}

const SingleProduct: React.FC<ParamsType> = ({ params }) => {
  const { products }: selectTypes = useSelector((state: any) => state.product)

  const productById = products.find((product: productType) => {
    return product.id === parseInt(params.id)
  })

  if (!productById) {
    return <p>Loading...</p>
  }

  return (
    <main className='w-full p-12 bg-white h-screen overflow-y-scroll'>
      <div className='w-full flex items-start drop-shadow-md bg-white rounded-xl p-8 justify-around gap-10'>
        <div className='w-[400px] h-[300px] rounded-2xl overflow-hidden'>
          <img
            src={productById.image[0]}
            className='w-full h-full object-contain'
          />
        </div>
        <div className='flex flex-col items-start gap-16'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-2xl text-eerieBlack font-medium'>
              {productById.title}
            </h2>
            <span className='text-salmonPink text-lg uppercase font-medium'>
              {productById.type}
            </span>
          </div>
          <p className='max-w-[500px] text-spanishGray opacity-90 text-[15px]'>
            {productById.description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
