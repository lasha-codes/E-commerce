import { HiArrowSmallRight } from 'react-icons/hi2'

const WatchList = () => {
  return (
    <div className='fixed w-[400px] bg-white drop-shadow-md h-screen p-10 right-0 top-0'>
      <div className='w-full flex items-center justify-between pb-3 border-b'>
        <h2>WATCH LIST ( 0 )</h2>
        <HiArrowSmallRight className='icon-style' />
      </div>
      <div>{/* watch list products */}</div>
      <div className='mt-auto pt-5'>
        <button className=''>Clear Watchlist</button>
      </div>
    </div>
  )
}

export default WatchList
