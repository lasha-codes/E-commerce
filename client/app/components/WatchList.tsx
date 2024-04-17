import { HiArrowSmallRight } from 'react-icons/hi2'
import { useSelector, useDispatch } from 'react-redux'
import { closeWatchList } from '../lib/features/tabs/tabsSlice'

const WatchList = () => {
  const dispatch = useDispatch()
  const { watchList, watchListOpen } = useSelector((state: any) => state.tabs)

  console.log(watchListOpen)

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
