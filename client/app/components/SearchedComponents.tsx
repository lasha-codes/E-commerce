import { useSelector, useDispatch } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'
import {
  IoEyeOutline,
  IoGitCompareOutline,
  IoBagAddOutline,
} from 'react-icons/io5'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedprice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
}

const SearchedComponents: React.FC<any> = ({ productsCopy }) => {
  const { searchVal }: { searchVal: string; products: ProductType[] } =
    useSelector((state: any) => state.product)

  const truncateTitle = (title: string) => {
    if (title.length > 11) {
      return `${title.slice(0, 11)}...`
    } else {
      return title
    }
  }

  return (
    <section className='w-full p-10 flex items-center justify-center flex-wrap gap-10'>
      {productsCopy &&
        productsCopy.map((product: ProductType, idx: number) => {
          return (
            <div
              key={idx}
              className='relative group border overflow-hidden p-5 flex h-[150px] items-center justify-between w-[300px] rounded-xl'
            >
              <div className='w-[80px] h-[80px]'>
                <img
                  src={product.image[0]}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex flex-col items-start gap-2'>
                <h2 className='text-lg text-eerieBlack w-[150px]'>
                  {truncateTitle(product.title)}
                </h2>
                <span className='text-[13px] text-sonicSilver capitalize'>
                  {product.type}
                </span>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center font-medium text-salmonPink'>
                    <LuDollarSign />
                    <span>{product.discountedprice || product.price}</span>
                  </div>
                  {product.discountedprice && (
                    <div className='flex items-center relative text-sm'>
                      <LuDollarSign className='text-[11px] text-sonicSilver' />
                      <span className='text-[12px] text-sonicSilver'>
                        {product.price}
                      </span>
                      <div className='w-full absolute top-[9px] h-[1px] left-[1px] bg-sonicSilver' />
                    </div>
                  )}
                </div>
              </div>
              <div className='absolute translate-x-10 group-hover:translate-x-0 transition-all duration-300 ease-out right-1 top-[10px] flex flex-col items-center gap-1.5'>
                <div className='border p-1 rounded icon-style'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke={'gray'}
                    className='w-[17.5px] h-[17.5px]'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />
                  </svg>
                </div>
                <div className='border rounded p-1 icon-style'>
                  <IoEyeOutline className='text-[17px] text-sonicSilver' />
                </div>
                <div className='border p-1 rounded icon-style'>
                  <IoGitCompareOutline className='text-[17px] text-sonicSilver' />
                </div>
                <div className='border p-1 rounded icon-style'>
                  <IoBagAddOutline className='text-sonicSilver text-[17px]' />
                </div>
              </div>
            </div>
          )
        })}
    </section>
  )
}

export default SearchedComponents
