import { useSelector, useDispatch } from 'react-redux'
import { LuDollarSign } from 'react-icons/lu'

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

  const truncateTitle = (title: string) => {
    if (title.length > 11) {
      return `${title.slice(0, 11)}...`
    } else {
      return title
    }
  }

  return (
    <section className='w-full p-10 flex items-center justify-center flex-wrap gap-10'>
      {productsCopy &&
        productsCopy.map((product: ProductType, idx: number) => {
          return (
            <div
              key={idx}
              className='relative border p-5 flex items-start justify-between w-[300px] rounded-xl'
            >
              <div className='w-[80px] h-[80px]'>
                <img
                  src={product.image[0]}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex flex-col items-start gap-2'>
                <h2 className='text-lg text-eerieBlack w-[150px]'>
                  {truncateTitle(product.title)}
                </h2>
                <span className='text-[13px] text-sonicSilver'>
                  {product.type}
                </span>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center font-medium text-salmonPink'>
                    <LuDollarSign />
                    <span>{product.discountedprice || product.price}</span>
                  </div>
                  {product.discountedprice && (
                    <div className='flex items-center relative text-sm'>
                      <LuDollarSign className='text-[11px] text-sonicSilver' />
                      <span className='text-[12px] text-sonicSilver'>
                        {product.price}
                      </span>
                      <div className='w-full absolute top-[9px] h-[1px] left-[1px] bg-sonicSilver' />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
    </section>
  )
}

export default SearchedComponents
