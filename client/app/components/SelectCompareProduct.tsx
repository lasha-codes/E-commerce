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

  return (
    <div className='absolute'>
      <div>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='flex items-center justify-between w-[250px] rounded-xl'
              >
                <img
                  src={product.image[0]}
                  alt={`select product image/${product.title}`}
                  className='h-[70px] w-[100px] object-contain'
                />
                <div>
                  <h3>{product.title}</h3>
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
