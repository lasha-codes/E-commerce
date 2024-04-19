'use client'

import { useSelector } from 'react-redux'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

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
      <div className='w-full flex items-start max-lg:flex-col max-lg:items-center drop-shadow-md bg-white rounded-xl p-8 justify-around gap-10'>
        <Carousel className='max-w-[420px]'>
          <CarouselContent>
            <CarouselItem className='w-[500px] p-16 h-[350px] rounded-2xl overflow-hidden'>
              <img
                src={productById.image[0]}
                className='w-full h-full object-contain'
              />
            </CarouselItem>
            <CarouselItem className='w-[500px] p-16 h-[350px] rounded-2xl overflow-hidden'>
              <img
                src={productById.image[1]}
                className='w-full h-full object-contain'
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className='absolute right-5' />
          <CarouselPrevious className='absolute left-5' />
        </Carousel>

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
