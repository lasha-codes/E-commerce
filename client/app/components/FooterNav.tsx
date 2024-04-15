import {
  IoBagHandleOutline,
  IoHomeOutline,
  IoGridOutline,
} from 'react-icons/io5'
import { IoIosHeartEmpty } from 'react-icons/io'

const FooterNav = () => {
  return (
    <div className='fixed bottom-0 left-1/2'>
      <nav>
        <div>
          <IoBagHandleOutline />
        </div>
        <div>
          <IoHomeOutline />
        </div>
        <div>
          <IoIosHeartEmpty />
        </div>
        <div>
          <IoGridOutline />
        </div>
      </nav>
    </div>
  )
}

export default FooterNav
