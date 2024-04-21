'use client'

import { useSelector, useDispatch } from 'react-redux'
import { Toaster } from 'sonner'
import Link from 'next/link'
import RecommendProducts from './RecommendProducts'

interface ProductType {
  id: number
  sold: number
  price: number
  image: string[]
  discountedPrice: null | number
  title: string
  description: string
  count: number
}

const Products = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)

  const mostSoldProducts: any =
    products.length > 0 &&
    [...products]
      .sort((a: ProductType, b: ProductType) => b.sold - a.sold)
      .slice(0, 4)

  return (
    <div className='mt-16 px-28'>
      <div>
        <RecommendProducts
          title={'Top Sellers'}
          filteredProducts={mostSoldProducts}
        />
      </div>
      <Toaster />
    </div>
  )
}

export default Products
