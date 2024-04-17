import { HiArrowSmallRight } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'

const WatchList = () => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='fixed flex flex-col w-[450px] z-[99] bg-white drop-shadow-md h-screen p-10 right-0 top-0'
    >
      <div className='w-full flex items-center justify-between pb-3 border-b'>
        <h2 className='font-semibold text-[13px]'>WATCH LIST ( 0 )</h2>
        <HiArrowSmallRight className='icon-style' />
      </div>
      <div>{/* watch list products */}</div>
      <div className='mt-auto pt-5'>
        <button className='w-full rounded-[2px] py-2.5 hover:opacity-90 transition-all duration-300 bg-eerieBlack text-white'>
          Clear Watchlist
        </button>
      </div>
    </div>
  )
}

export default WatchList
