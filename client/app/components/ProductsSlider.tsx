import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Product from './Product'
import dress from '../assets/dress.svg'

const ProductsSlider = () => {
  return (
    <main className='px-28'>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Product image={dress} title={'DRESS & FROCK'} count={53} />
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
      </Carousel>
    </main>
  )
}

export default ProductsSlider
