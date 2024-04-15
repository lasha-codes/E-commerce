import Category from './Category'
import { IoCloseOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { BsCurrencyDollar } from 'react-icons/bs'

const SideBar = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)

  interface productType {
    id: number
    title: string
    price: number
    discountedPrice: null | number
    image: string[]
    type: string
    description: string
    sold: number
  }

  return (
    <div className='fixed flex flex-col max-md:w-[300px] max-md:pb-20 items-center overflow-hidden max-sm:overflow-y-scroll px-10 top-0 h-screen z-[99] left-0 w-[500px] bg-white'>
      <Category
        extraClass={
          'border-none w-[390px] max-md:w-[200px] -mt-[5px] text-xl uppercase'
        }
        closeIcon={
          <IoCloseOutline className='text-[25px] absolute top-6 -right-5 icon-style' />
        }
      ></Category>
      <div className='self-start'>
        <h2 className='ml-9 text-xl font-semibold text-eerieBlack opacity-95'>
          BEST SELLERS
        </h2>
        <div className='flex items-center flex-wrap gap-7 mt-7 ml-5'>
          {products &&
            products.slice(0, 4).map((product: productType) => {
              return (
                <div className='flex items-center gap-8' key={product.id}>
                  <div>
                    <img className='w-[65px]' src={product.image[0]} />
                  </div>
                  <div>
                    <h3 className='text-eerieBlack font-medium'>
                      {product.title}
                    </h3>
                    <span className='text-sm text-salmonPink'>
                      {product.type}
                    </span>
                    <span className='flex items-center font-semibold'>
                      <BsCurrencyDollar />
                      {product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default SideBar
