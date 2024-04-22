import { useSelector } from 'react-redux'

const NewProducts = () => {
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
    type: string
  }

  const { products } = useSelector((state: any) => state.product)
  return (
    <div className='w-full p-10'>
      <div className='flex items-start justify-center flex-wrap gap-12'>
        {products &&
          products.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='bg-white border w-[300px] h-[450px] rounded-[10px] py-10 px-7'
              >
                <div className='p-3'>
                  <img
                    alt='product image'
                    src={product.image[0]}
                    className='h-[240px] w-[240px] object-contain'
                  />
                </div>
                <div className='flex flex-col gap-3'>
                  <span className='uppercase text-salmonPink text-[12.5px] font-medium'>
                    {product.type}
                  </span>
                  <h2>{product.title}</h2>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default NewProducts
