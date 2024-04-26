import { useDispatch, useSelector } from 'react-redux'
import { FiDollarSign } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
}

interface PropTypes {
  position: string
  addIndex: number
}

const SelectCompareProduct = ({ position, addIndex }: PropTypes) => {
  const dispatch = useDispatch()
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )

  const truncateTitle = (title: string) => {
    console.log(title.length)
    let truncated = ''
    if (title.length > 40) {
      truncated = `${title.slice(0, 40)}...`
    } else {
      truncated = title
    }
    return truncated
  }

  return (
    <div className='absolute'>
      <div className='flex flex-col w-[400px] compare-product items-start gap-8 justify-start h-[400px] overflow-y-scroll px-4 py-5 bg-white border-eerieBlack border rounded-[5px]'>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='flex items-center group relative w-full justify-between rounded-xl gap-2'
              >
                <div className='min-w-[110px] max-w-[110px] max-h-[70px] min-h-[70px] flex justify-start items-center'>
                  <img
                    src={product.image[0]}
                    alt={`select product image/${product.title}`}
                    className='h-[70px] w-[100px] object-contain'
                  />
                </div>

                <div className='w-full flex flex-col gap-2'>
                  <h3 className='w-[240px] text-sonicSilver text-[13.5px]'>
                    {truncateTitle(product.title)}
                  </h3>
                  <span className='text-[12px] uppercase font-medium text-salmonPink'>
                    {product.type}
                  </span>
                  <span className='flex items-center font-semibold'>
                    <FiDollarSign />
                    {product.price}
                  </span>
                </div>

                <div className='w-full h-full flex items-center justify-center absolute z-[20] bg-cultured opacity-0 rounded group-hover:opacity-70 transition-all duration-300 ease-linear'>
                  <FiPlus className='text-4xl text-black' />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SelectCompareProduct
