'use client'

interface ParamsType {
  params: {
    id: any
  }
}

const SingleProduct: React.FC<ParamsType> = ({ params }) => {
  return <div>{params.id.split('%3A')[1]}</div>
}

export default SingleProduct
