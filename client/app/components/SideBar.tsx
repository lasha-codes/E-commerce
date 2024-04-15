import Category from './Category'
import { IoCloseOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'

const SideBar = () => {
  const dispatch = useDispatch()
  const { products } = useSelector((state: any) => state.product)

  interface productType {
    title: string
    price: number
    discountedPrice: null | number
    image: string[]
    type: string
    description: string
    sold: number
  }

  return (
    <div className='fixed flex flex-col items-center px-10 top-0 h-screen z-[99] left-0 w-[500px] bg-white'>
      <Category
        extraClass={'border-none w-[390px] text-xl uppercase'}
        closeIcon={
          <IoCloseOutline className='text-[25px] absolute top-6 -right-5 icon-style' />
        }
      ></Category>
      <div className='self-start'>
        <h2 className='ml-9 text-xl font-semibold text-eerieBlack opacity-95'>
          BEST SELLERS
        </h2>
        <div className='flex flex-col gap-8 mt-7 ml-5'>
          {products &&
            products.slice(0, 4).map((product: productType) => {
              return (
                <div className='flex items-start gap-8'>
                  <div>
                    <img className='w-[65px]' src={product.image[0]} />
                  </div>
                  <div>
                    <h3 className='text-eerieBlack font-medium'>
                      {product.title.slice(0, 12)}...
                    </h3>
                    <span className='text-sm text-spanishGray'>
                      {product.type}
                    </span>
                    <span className='flex items-center'>
                      <span>$</span>
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
