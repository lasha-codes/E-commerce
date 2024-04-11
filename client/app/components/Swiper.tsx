import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'
import Slide from './Slide'

const Swiper = () => {
  return (
    <div className='px-28 max-sm:px-20 lg:w-[80%] mt-1 lg:mx-auto max-md:mt-5'>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Slide
              banner={banner1}
              desc={"WOMEN'S LATEST FASHION SALE"}
              price={20}
              type={'Trending Item'}
            />
          </CarouselItem>
          <CarouselItem>
            <Slide
              banner={banner2}
              type='Trending Item'
              desc={'MODERN SUNGLASSES'}
              price={15}
            />
          </CarouselItem>
          <CarouselItem>
            <Slide
              type={'Sale Offer'}
              banner={banner3}
              desc={'NEW FASHION SUMMER SALE'}
              price={29}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className='hidden max-lg:flex' />
        <CarouselPrevious className='hidden max-lg:flex' />
      </Carousel>
    </div>
  )
}

export default Swiper
