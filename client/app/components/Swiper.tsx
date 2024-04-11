import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'

const Swiper = () => {
  return (
    <div className='px-28 max-sm:px-20 lg:w-[80%] mt-1 lg:mx-auto max-md:mt-5'>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className='w-full object-cover h-[300px] lg:h-[370px] max-md:h-[250px] max-sm:h-[210px] max-xsm:h-[140px] rounded-xl overflow-hidden relative'>
              <Image
                priority
                src={banner1}
                alt='slider photo 1'
                className='w-full h-full object-cover absolute bottom-0 left-0 z-[1]'
              />
              <div className='z-[10] flex flex-col gap-2 w-full h-full absolute bottom-0 left-[11%] top-[20%]'>
                <h2 className='text-salmonPink text-[24px] tracking-[1.6px] font-medium max-md:text-lg max-sm:hidden max-xsm:block max-xsm:text-eerieBlack'>
                  Trending Item
                </h2>
                <p className='max-w-[350px] text-4xl font-extrabold text-eerieBlack max-md:text-xl max-md:max-w-[200px] max-xsm:hidden'>
                  WOMEN'S LATEST FASHION SALE
                </p>
                <p className='text-xl text-sonicSilver font-medium max-md:text-base max-xsm:hidden'>
                  starting at ${' '}
                  <span className='text-3xl font-bold text-sonicSilver max-md:text-2xl'>
                    20
                  </span>
                  .00
                </p>
                <button
                  className='bg-salmonPink w-fit text-sm
                  hover:bg-eerieBlack transition-all duration-500 ease
                py-2 px-5 rounded font-semibold text-white mt-2 max-md:text-[12px] max-md:px-4 max-md:py-1.5 max-xsm:text-[10px] max-xsm:py-1 max-xsm:px-3'
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='rounded-xl overflow-hidden'>
              <Image
                priority
                src={banner2}
                alt='slider photo 2'
                className='w-full object-cover rounded-lg h-[300px] lg:h-[370px] max-md:h-[250px] max-sm:h-[210px] max-xsm:h-[140px]'
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='rounded-xl overflow-hidden'>
              <Image
                priority
                src={banner3}
                alt='slider photo 3'
                className='w-full object-cover rounded-lg h-[300px] lg:h-[370px] 
              max-md:h-[250px] max-sm:h-[210px] max-xsm:h-[140px]'
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className='hidden max-lg:flex' />
        <CarouselPrevious className='hidden max-lg:flex' />
      </Carousel>
    </div>
  )
}

export default Swiper
