import { HiArrowSmallRight } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { closeWatchList } from '../lib/features/tabs/tabsSlice'
import { FiDollarSign } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'

const WatchList = () => {
  const dispatch = useDispatch()
  const { watchList, watchListOpen } = useSelector((state: any) => state.tabs)

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed flex flex-col w-[450px] max-sm:w-full z-[99] bg-white drop-shadow-md h-screen p-10 right-0 top-0 transition-all duration-700 max-md:duration-1000 ${
        watchListOpen ? 'translate-x-0' : 'translate-x-[700px]'
      }`}
    >
      <div className='w-full flex items-center justify-between pb-3 border-b'>
        <h2 className='font-semibold text-[13px]'>WATCH LIST ( 0 )</h2>
        <HiArrowSmallRight
          onClick={() => dispatch(closeWatchList())}
          className='icon-style'
        />
      </div>
      <div>
        {watchList &&
          watchList.map((product: any) => {
            return (
              <div
                key={product.id}
                className='border-b cart-product pb-4 pt-6 relative'
              >
                <IoIosClose className='absolute top-2 right-2 text-2xl text-sonicSilver transition-all duration-500 hover:text-[#f55c5c] icon-style cursor-pointer' />
                <div className='flex items-center gap-5'>
                  <div
                    className='min-w-[100px] max-w-[100px] h-[80px] 
'
                  >
                    <img
                      src={product.image[0]}
                      className='w-full h-full object-contain'
                      alt='cart-product'
                    />
                  </div>
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-medium max-w-[270px] text-eerieBlack text-[15px]'>
                        {product.title}
                      </h3>
                      <div className='flex items-center justify-between'>
                        <span className='uppercase py-[6px] text-[13px] text-salmonPink font-medium'>
                          {product.type}
                        </span>
                        <span className='flex items-center font-semibold  text-eerieBlack'>
                          <FiDollarSign />
                          {product.price}
                        </span>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'></div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className='mt-auto pt-5'>
        <button className='w-full rounded-[2px] py-2.5 hover:opacity-90 transition-all duration-300 bg-eerieBlack text-white'>
          Clear Watchlist
        </button>
      </div>
    </div>
  )
}

export default WatchList
