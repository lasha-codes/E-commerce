import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Product from './Product'
import dress from '../assets/dress.svg'
import coat from '../assets/coat.svg'
import glasses from '../assets/glasses.svg'
import shorts from '../assets/shorts.svg'
import tee from '../assets/tee.svg'
import jacket from '../assets/jacket.svg'
import watch from '../assets/watch.svg'
import hat from '../assets/hat.svg'

const ProductsSlider = () => {
  return (
    <main className='px-28 mt-10'>
      <Carousel className='max-w-[900px] w-full mx-auto border p-4 rounded-xl border-salmonPink'>
        <CarouselContent>
          <CarouselItem className='flex items-center justify-between flex-wrap gap-7 max-md:justify-center'>
            <Product image={dress} title={'DRESS & FROCK'} count={53} />
            <Product image={coat} title={'WINTER WEAR'} count={58} />
            <Product image={glasses} title={'GLASSES & LENS'} count={23} />
          </CarouselItem>
          <CarouselItem className='flex items-center justify-between flex-wrap gap-7 max-md:justify-center'>
            <Product image={shorts} title={'SHORTS & JEANS'} count={84} />
            <Product image={tee} title={'T-SHIRTS'} count={35} />
            <Product image={jacket} title={'JACKET'} count={16} />
          </CarouselItem>
          <CarouselItem className='flex items-center justify-around flex-wrap gap-7 max-md:justify-center'>
            <Product image={watch} title={'WATCH'} count={27} />
            <Product image={hat} title={'HAT AND CAPS'} count={39} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  )
}

export default ProductsSlider
