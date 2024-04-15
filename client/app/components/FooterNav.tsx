import {
  IoBagHandleOutline,
  IoHomeOutline,
  IoGridOutline,
} from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'

const FooterNav = () => {
  return (
    <div className='fixed bottom-0 left-[27vw] max-lg:left-[21vw] max-md:left-[18vw] w-[590px] rounded-t-xl py-5 drop-shadow-xl bg-[#ffffff]'>
      <nav className='flex items-center justify-between px-12'>
        <div className='relative'>
          <IoBagHandleOutline className='text-3xl cursor-pointer icon-style' />
          <div className='absolute bg-salmonPink rounded-full w-[17px] h-[17px] flex items-center justify-center text-white text-sm -top-0.5 -right-1'>
            0
          </div>
        </div>
        <div>
          <IoHomeOutline className='text-3xl cursor-pointer icon-style' />
        </div>
        <div>
          <IoIosHeartEmpty className='text-[32.5px] cursor-pointer icon-style' />
        </div>
        <div>
          <IoGridOutline className='text-3xl cursor-pointer icon-style' />
        </div>
      </nav>
    </div>
  )
}

export default FooterNav
