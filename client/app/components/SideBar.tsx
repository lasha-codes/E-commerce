import Category from './Category'
import { IoCloseOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'

const SideBar = () => {
  const dispatch = useDispatch()
  return (
    <div className='fixed flex flex-col items-center px-10 top-0 h-screen z-[99] left-0 w-[500px] bg-white'>
      <Category
        extraClass={'border-none w-[390px] text-xl uppercase'}
        closeIcon={
          <IoCloseOutline className='text-[25px] absolute top-6 -right-5 icon-style' />
        }
      ></Category>
      <h2 className='self-start ml-9 text-xl font-semibold text-eerieBlack opacity-95'>
        BEST SELLERS
      </h2>
    </div>
  )
}

export default SideBar
