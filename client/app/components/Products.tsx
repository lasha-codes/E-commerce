'use client'

import { useSelector } from 'react-redux'
import { Toaster } from 'sonner'
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
  rating: number[]
}

const Products = () => {
  const { products } = useSelector((state: any) => state.product)

  const mostSoldProducts: any =
    products.length > 0 &&
    [...products]
      .sort((a: ProductType, b: ProductType) => b.sold - a.sold)
      .slice(0, 4)

  const compareByReviews = (a: ProductType, b: ProductType) => {
    const ratingA = a.rating.reduce((acc, number) => acc + number, 0)
    const ratingB = b.rating.reduce((acc, number) => acc + number, 0)
    return ratingB - ratingA
  }

  const sortedByReviews: any =
    products.length > 0 && [...products].sort(compareByReviews).slice(0, 4)

  const newProducts: any =
    products.length > 1 &&
    [...products].sort((a, b) => b.date - a.date).slice(0, 4)

  return (
    <div className='mt-16'>
      <div className='flex items-center gap-10 flex-wrap justify-center'>
        <RecommendProducts
          title={'Top Sellers'}
          filteredProducts={mostSoldProducts}
        />
        <RecommendProducts
          title={'By Rating'}
          filteredProducts={sortedByReviews}
        />
        <RecommendProducts
          title={'New Products'}
          filteredProducts={newProducts}
        />
      </div>
      <Toaster />
    </div>
  )
}

export default Products
