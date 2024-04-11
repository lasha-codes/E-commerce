import Image from 'next/image'

type ProductPropTypes = {
  image: any
  title: string
  count: number
}

const Product: React.FC<ProductPropTypes> = ({ image, title, count }) => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='bg-spanishGray p-2 rounded-xl border w-[50px] h-[50px]'>
          <Image
            src={image}
            priority
            className='w-full h-full object-cover'
            alt='product-image'
          />
        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <span>({count})</span>
          </div>
          <button>Show All</button>
        </div>
      </div>
    </div>
  )
}

export default Product
