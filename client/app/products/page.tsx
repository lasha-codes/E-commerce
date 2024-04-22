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
  rating: number[]
}

const ProductsPage = () => {
  const dispatch = useDispatch()
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )

  return (
    <main className='w-full p-10'>
      <div className=''></div>
      <div className=''>
        {products &&
          products.map((product: ProductType) => {
            return <div key={product.id}></div>
          })}
      </div>
    </main>
  )
}

export default ProductsPage
