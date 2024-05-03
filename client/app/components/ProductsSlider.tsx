import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Product from './Product'
import dress from '../assets/dress.svg'
import perfume from '../assets/perfume.svg'
import glasses from '../assets/glasses.svg'
import shorts from '../assets/shorts.svg'
import tee from '../assets/tee.svg'
import jacket from '../assets/jacket.svg'
import watch from '../assets/watch.svg'
import hat from '../assets/hat.svg'
import shoes from '../assets/shoes.svg'
import { useSelector } from 'react-redux'

import Autoplay from 'embla-carousel-autoplay'

interface productTypes {
  name: string
  description: string
  price: number | string
  type: string
  addedImages: [string] | any
  gender: string
}

const ProductsSlider = () => {
  const { products } = useSelector((state: any) => state.product)

  const calculateQuantity = (category: string) => {
    const filteredByCategory =
      products.length > 0 &&
      products.filter((product: productTypes) => {
        return product.type.toLowerCase() === category.toLowerCase()
      })
    return filteredByCategory.length
  }

  return (
    <main className='px-28 mt-10'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className='max-w-[900px] w-full mx-auto border p-4 rounded-xl border-salmonPink'
      >
        <CarouselContent>
          <CarouselItem className='flex items-center justify-between flex-wrap gap-7 max-md:justify-center'>
            <Product
              image={dress}
              title={'DRESSES'}
              count={products.length > 0 ? calculateQuantity('DRESS') : '..'}
            />
            <Product
              image={glasses}
              title={'GLASSES'}
              count={products.length > 0 ? calculateQuantity('GLASSES') : '..'}
            />
            <Product
              image={perfume}
              title={'PERFUME'}
              count={products.length > 0 ? calculateQuantity('PERFUME') : '..'}
            />
          </CarouselItem>
          <CarouselItem className='flex items-center justify-between flex-wrap gap-7 max-md:justify-center'>
            <Product
              image={shorts}
              title={'SHORTS & JEANS'}
              count={
                products.length > 0 ? calculateQuantity('SHORT & JEANS') : '..'
              }
            />
            <Product
              image={tee}
              title={'T-SHIRTS'}
              count={products.length > 0 ? calculateQuantity('T-SHIRT') : '..'}
            />
            <Product
              image={jacket}
              title={'JACKET'}
              count={products.length > 0 ? calculateQuantity('JACKET') : '..'}
            />
          </CarouselItem>
          <CarouselItem className='flex items-center justify-around flex-wrap gap-7 max-md:justify-center'>
            <Product
              image={watch}
              title={'WATCH'}
              count={products.length > 0 ? calculateQuantity('WATCH') : '..'}
            />
            <Product
              image={hat}
              title={'HATS AND CAPS'}
              count={
                products.length > 0 ? calculateQuantity('HATS & CAPS') : '..'
              }
            />
            <Product
              image={shoes}
              title={'Foot Wear'}
              count={
                products.length > 0 ? calculateQuantity('FOOT WEAR') : '..'
              }
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  )
}

export default ProductsSlider
