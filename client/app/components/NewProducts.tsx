import { useSelector } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'

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
    date: number
  }

  const getRating = (ratingArr: number[]) => {
    if (ratingArr.length === 0) {
      return 'Not Rated'
    } else {
      const ratingTotal = ratingArr.reduce((acc, num) => acc + num, 0)
      const ratingAverage = ratingTotal
      return Math.round(ratingAverage / ratingArr.length)
    }
  }

  const { products } = useSelector((state: any) => state.product)

  const newProducts =
    products &&
    [...products].sort((a: ProductType, b: ProductType) => {
      return b.date - a.date
    })

  const starsArray = [1, 2, 3, 4, 5]

  return (
    <div className='w-full p-10'>
      <div className='flex items-start justify-center flex-wrap gap-12'>
        {newProducts &&
          newProducts.map((product: ProductType) => {
            return (
              <div
                key={product.id}
                className='bg-white border w-[380px] flex justify-center flex-col items-start h-[480px] group rounded-[10px] py-10 px-7'
              >
                <div className='p-3 w-full flex justify-center'>
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
                  <h2 className='text-[16px] text-sonicSilver font-light'>
                    {product.title}
                  </h2>
                  <div className='flex items-center'>
                    {Number(getRating(product.rating))
                      ? starsArray.map((star: any) => {
                          return (
                            <svg
                              key={star}
                              xmlns='http://www.w3.org/2000/svg'
                              fill={
                                star <= getRating(product.rating)
                                  ? 'black'
                                  : 'none'
                              }
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='w-5 h-5'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                              />
                            </svg>
                          )
                        })
                      : 'not rated'}
                  </div>
                  <span className='flex items-center font-bold'>
                    <LuDollarSign />
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

export default NewProducts
