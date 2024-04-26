import { useDispatch, useSelector } from 'react-redux'

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

const SelectCompareProduct = () => {
  const dispatch = useDispatch()
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )
  return (
    <div className='absolute'>
      <div>
        {products &&
          products.map((product: ProductType) => {
            return <div key={product.id}></div>
          })}
      </div>
    </div>
  )
}

export default SelectCompareProduct
