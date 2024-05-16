import { useSelector, useDispatch } from 'react-redux'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedprice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
}

const SearchedComponents: React.FC<any> = ({ productsCopy }) => {
  const { searchVal }: { searchVal: string; products: ProductType[] } =
    useSelector((state: any) => state.product)

  console.log(productsCopy)

  return (
    <section className='w-full p-10 flex items-center justify-center flex-wrap gap-10'>
      {productsCopy &&
        productsCopy.map((product: ProductType, idx: number) => {
          return (
            <div key={idx} className='relative'>
              <div className='w-[80px] h-[80px]'>
                <img
                  src={product.image[0]}
                  className='w-full h-full object-contain'
                />
              </div>
              <div></div>
            </div>
          )
        })}
    </section>
  )
}

export default SearchedComponents
