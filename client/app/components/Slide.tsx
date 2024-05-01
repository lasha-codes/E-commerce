import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PropTypes {
  banner: any
  desc: string
  price: number
  type: string
}

const Slide: React.FC<PropTypes> = ({ banner, desc, price, type }) => {
  return (
    <div
      className='w-full object-cover h-[300px] lg:h-[370px] max-md:h-
    [250px] max-sm:h-[210px] max-xsm:h-[140px] rounded-xl overflow-hidden 
    relative'
    >
      <Image
        priority
        src={banner}
        alt='slider photo 1'
        className='w-full h-full object-cover absolute bottom-0 left-0 z-[1]'
      />
      <div className='z-[10] flex flex-col gap-2 w-full h-full absolute bottom-0 left-[11%] top-[20%]'>
        <h2 className='text-salmonPink text-[24px] tracking-[1.6px] font-medium max-md:text-lg max-sm:hidden max-xsm:hidden'>
          {type}
        </h2>
        <p className='max-w-[350px] text-4xl font-extrabold text-eerieBlack max-md:text-xl max-md:max-w-[200px] max-xsm:hidden'>
          {desc}
        </p>
        <p className='text-xl text-sonicSilver font-medium max-md:text-base max-xsm:text-sm'>
          starting at ${' '}
          <span className='text-3xl font-bold text-sonicSilver max-md:text-2xl max-xsm:text-lg'>
            {price}
          </span>
          .00
        </p>
        <Link
          href='/products'
          className='bg-salmonPink w-fit text-sm
           hover:bg-eerieBlack transition-all duration-500 ease
         py-2 px-5 rounded font-semibold text-white mt-2 max-md:text-[12px] max-md:px-4 max-md:py-1.5 max-xsm:text-[10px] max-xsm:py-1 max-xsm:px-3'
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

export default Slide
