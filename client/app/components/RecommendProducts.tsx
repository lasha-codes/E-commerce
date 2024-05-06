import { useSelector, useDispatch } from 'react-redux'
import {
  IoEyeOutline,
  IoGitCompareOutline,
  IoBagAddOutline,
} from 'react-icons/io5'
import { addItemToCart, addToWatchList } from '../lib/features/tabs/tabsSlice'
import { addProductToCompare } from '../lib/features/products/productSlice'
import Link from 'next/link'
import { CgDollar } from 'react-icons/cg'

interface ProductType {
  id: number
  sold: number
  price: number
  image: string[]
  discountedprice: null | number
  title: string
  description: string
  count: number
}

interface propTypes {
  filteredProducts: ProductType[]
  title: string
}

const RecommendProducts = ({ filteredProducts, title }: propTypes) => {
  const dispatch = useDispatch()
  const { watchList } = useSelector((state: any) => state.tabs)
  const addToCart = (product: any) => {
    dispatch(addItemToCart(product))
  }

  return (
    <div className='flex flex-col items-center justify-center flex-wrap gap-5'>
      <h1 className='w-full text-start text-eerieBlack text-[19px] font-medium border-b pb-3'>
        {title}
      </h1>
      {filteredProducts &&
        filteredProducts.map((product: any) => {
          const productLiked = watchList.find((liked: ProductType) => {
            return product.id === liked.id
          })
          return (
            <div
              key={product.id}
              className='bg-white overflow-hidden group h-[150px] w-[300px]  flex items-center border rounded-xl p-5 relative'
            >
              <div className='flex items-center gap-8'>
                <img
                  src={product.image[0]}
                  className='w-[80px] max-h-[125px] object-contain pt-5'
                />
                <div className='flex flex-col gap-2'>
                  <h1 className=''>{product.title.slice(0, 12)}...</h1>
                  <span className='text-sm capitalize text-sonicSilver'>
                    {product.type}
                  </span>
                  <span className='font-semibold flex items-center text-salmonPink'>
                    <CgDollar className='text-lg' />
                    <div className='flex items-center gap-2'>
                      {product.discountedprice
                        ? product.discountedprice.toFixed(2)
                        : product.price.toFixed(2)}

                      {product.discountedprice && (
                        <span className='relative flex items-center w-fit text-[12px] font-light text-sonicSilver'>
                          <CgDollar className='text-[13px]' />
                          {product.price.toFixed(2)}
                          <div className='w-full absolute top-2 h-[1px] bg-spanishGray' />
                        </span>
                      )}
                    </div>
                  </span>
                </div>
              </div>
              <div className='absolute right-3 top-2 group-hover:translate-x-0 transition-all duration-300 ease flex flex-col items-center gap-[6px] translate-x-12'>
                <div className='relative z-[10] side-icon-container overflow-hidden'>
                  <div
                    onClick={() => dispatch(addToWatchList(product))}
                    className={`p-1 rounded-[4px] border transition-all duration-500 side-icon group relative z-[10] cursor-pointer ${
                      productLiked ? 'liked-product' : ''
                    }`}
                  >
                    <span className='z-[10]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill={`${productLiked ? 'hsl(0, 0%, 47%)' : 'none'}`}
                        viewBox='0 0 24 24'
                        strokeWidth={1}
                        stroke='hsl(0, 0%, 47%)'
                        className='w-5 h-5 icon-style'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                        />
                      </svg>
                    </span>
                  </div>
                  <div className='absolute transition-all duration-500 top-0 left-0 rounded-[6px] w-full h-full opacity-0 bg-eerieBlack z-[1]' />
                </div>
                <div className='relative z-[10] side-icon-container overflow-hidden'>
                  <div className='p-1 rounded-[4px] border transition-all duration-500 side-icon group relative z-[10]'>
                    <Link href={`/products/${product.id}`} className='z-[10]'>
                      <IoEyeOutline
                        className='text-[19px] text-sonicSilver cursor-pointer icon-style z-[10]
                  '
                      />
                    </Link>
                  </div>
                  <div className='absolute transition-all duration-500 top-0 left-0 rounded-[6px] w-full h-full opacity-0 bg-eerieBlack z-[1]' />
                </div>
                <div className='relative z-[10] side-icon-container overflow-hidden'>
                  <div className='p-1 rounded-[4px] border transition-all duration-500 side-icon group relative z-[10]'>
                    <span className='z-[10]'>
                      <IoGitCompareOutline
                        onClick={() => dispatch(addProductToCompare(product))}
                        className='text-[19px] text-sonicSilver cursor-pointer icon-style z-[10]
                  '
                      />
                    </span>
                  </div>
                  <div className='absolute transition-all duration-500 top-0 left-0 rounded-[6px] w-full h-full opacity-0 bg-eerieBlack z-[1]' />
                </div>
                <div className='relative z-[10] side-icon-container overflow-hidden'>
                  <div
                    onClick={() => {
                      addToCart(product)
                    }}
                    className='p-1 rounded-[4px] border transition-all duration-500 side-icon group relative z-[10] cursor-pointer'
                  >
                    <span className='z-[10]'>
                      <IoBagAddOutline
                        className='text-[19px] text-sonicSilver cursor-pointer icon-style z-[10]
                  '
                      />
                    </span>
                  </div>
                  <div className='absolute transition-all duration-500 top-0 left-0 rounded-[6px] w-full h-full opacity-0 bg-eerieBlack z-[1]' />
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default RecommendProducts
