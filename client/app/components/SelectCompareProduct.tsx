import { useDispatch, useSelector } from 'react-redux'
import { FiDollarSign } from 'react-icons/fi'

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
      <div className='flex flex-col w-[400px] items-start gap-8 justify-start h-[400px] overflow-y-scroll px-4 py-5 bg-white border-eerieBlack border-2 rounded-[5px]'>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='flex items-center justify-between w-[250px] rounded-xl'
              >
                <div className='min-w-[110px] max-w-[110px] max-h-[70px] min-h-[70px] flex justify-start items-center'>
                  <img
                    src={product.image[0]}
                    alt={`select product image/${product.title}`}
                    className='h-[70px] w-[100px] object-contain'
                  />
                </div>

                <div className='w-full'>
                  <h3 className='w-[240px]'>{truncateTitle(product.title)}</h3>
                  <span>{product.type}</span>
                  <span className='flex items-center'>
                    <FiDollarSign />
                    {product.price}
                  </span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SelectCompareProduct
