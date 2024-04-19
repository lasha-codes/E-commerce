'use client'

import { useSelector } from 'react-redux'

interface ParamsType {
  params: {
    id: any
  }
}

interface productType {
  id: number
  title: string
  description: string
  sold: number
  price: number
  discountedPrice: number | null
  image: string[]
}

interface selectTypes {
  products: productType[]
}

const SingleProduct: React.FC<ParamsType> = ({ params }) => {
  const { products }: selectTypes = useSelector((state: any) => state.product)

  const productById = products.find((product: productType) => {
    return product.id === parseInt(params.id)
  })

  return <div>{productById && productById.title}</div>
}

export default SingleProduct
