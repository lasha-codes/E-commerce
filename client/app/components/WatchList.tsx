import { HiArrowSmallRight } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { closeWatchList } from '../lib/features/tabs/tabsSlice'
import { FiDollarSign } from 'react-icons/fi'
import { removeFromWatchList } from '../lib/features/tabs/tabsSlice'

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
        <h2 className='font-semibold text-[13px]'>
          WATCH LIST ( {watchList.length} )
        </h2>
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
                <svg
                  onClick={() => dispatch(removeFromWatchList(product))}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#D2042D'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='#D2042D'
                  className='absolute top-2 right-2 text-2xl 
                  text-sonicSilver
                   transition-all w-5 h-5 duration-500 hover:fill-white
                  icon-style
                   cursor-pointer'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                  />
                </svg>
                <div className='flex items-center gap-5'>
                  <div className='min-w-[100px] max-w-[100px] h-[80px]'>
                    <img
                      src={product.image[0]}
                      className='w-full h-full object-contain'
                      alt='cart-product'
                    />
                  </div>
                  <div className='flex flex-col gap-3 w-full'>
                    <div className='flex flex-col'>
                      <h3 className='font-medium max-w-[270px] text-eerieBlack text-[15px]'>
                        {product.title}
                      </h3>
                      <div className='flex items-center w-full justify-between'>
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
