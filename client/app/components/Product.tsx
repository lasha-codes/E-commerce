import Image from 'next/image'

type ProductPropTypes = {
  image: any
  title: string
  count: number
}

const Product: React.FC<ProductPropTypes> = ({ image, title, count }) => {
  return (
    <div className='bg-white border max-w-[270px] p-2 flex rounded-xl justify-center items-center'>
      <div className='flex items-center gap-4 w-full'>
        <div className='bg-cultured p-2 rounded-xl border w-[65px] h-[50px]'>
          <Image
            src={image}
            priority
            className='w-full h-full object-contain'
            alt='product-image'
          />
        </div>
        <div className='flex flex-col items-start gap-1 w-full'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='text-[12px] font-semibold'>{title}</h2>
            <span className='text-[10px] text-sonicSilver'>({count})</span>
          </div>
          <button className='text-salmonPink text-[12px]'>Show All</button>
        </div>
      </div>
    </div>
  )
}

export default Product
