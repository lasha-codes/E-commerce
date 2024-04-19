'use client'

import { useSelector } from 'react-redux'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IoBagHandleOutline } from 'react-icons/io5'
import { addToWatchList } from '@/app/lib/features/tabs/tabsSlice'
import { addItemToCart } from '@/app/lib/features/tabs/tabsSlice'

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
  const { watchList }: { watchList: [productType] } = useSelector(
    (state: any) => state.tabs
  )

  const productById = products.find((product: productType) => {
    return product.id === parseInt(params.id)
  })

  if (!productById) {
    return <p>Loading...</p>
  }

  const productLiked = watchList.find((product: productType) => {
    return product.id === productById.id
  })

  console.log(productLiked)

  return (
    <main className='w-full p-12 bg-white h-screen overflow-y-scroll'>
      <div className='w-full flex items-center max-lg:flex-col drop-shadow-md bg-white rounded-xl p-8 justify-around gap-10'>
        <Carousel className='max-w-[500px] max-md:max-w-[400px]'>
          <CarouselContent>
            <CarouselItem className='w-[500px] p-16 h-[450px] max-md:p-5 rounded-2xl overflow-hidden'>
              <img
                src={productById.image[0]}
                className='w-full h-full object-contain'
              />
            </CarouselItem>
            <CarouselItem className='w-[500px] p-16 h-[450px] max-md:p-5 rounded-2xl overflow-hidden'>
              <img
                src={productById.image[1]}
                className='w-full h-full object-contain'
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className='absolute right-5 max-md:hidden' />
          <CarouselPrevious className='absolute left-5 max-md:hidden' />
        </Carousel>

        <div className='flex flex-col items-start gap-10'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl text-eerieBlack font-semibold max-md:text-2xl max-sm:text-xl'>
              {productById.title}
            </h2>
            <span className='text-salmonPink text-xl max-md:text-lg max-sm:text-[16.5px] uppercase font-medium'>
              {productById.type}
            </span>
          </div>
          <p className='max-w-[500px] text-spanishGray opacity-90 text-[17px] max-md:text-sm'>
            {productById.description}
          </p>
        </div>
      </div>
      <div className='mt-3 flex w-full justify-center items-center gap-10'>
        <button className='flex items-center gap-2.5 text-white bg-eerieBlack px-5 py-2 rounded-[2px] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95'>
          <span>Add to cart</span>
          <IoBagHandleOutline className='text-[21px]' />
        </button>
        <button className='flex items-center gap-2.5 text-white bg-cultured px-5 py-2 rounded-[2px] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95'>
          <span className='text-eerieBlack'>Add to wishlist</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill={productLiked ? '#200' : 'none'}
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='#200'
            className='w-5 h-5 transition-all duration-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
            />
          </svg>
        </button>
      </div>
    </main>
  )
}

export default SingleProduct
