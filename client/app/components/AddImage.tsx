import { IoCloseOutline } from 'react-icons/io5'
import { closeAddImage } from '../lib/features/products/productSlice'
import { useDispatch } from 'react-redux'

const AddImage = () => {
  const dispatch = useDispatch()
  return (
    <div className='relative bg-white w-[300px] h-[180px] translate-x-[50%] translate-y-[50%] z-[999] flex justify-center items-center rounded shadow-sm shadow-cultured'>
      <div className='flex gap-2 flex-col'>
        <label htmlFor='address' className='cursor-pointer text-eerieBlack'>
          Enter image address
        </label>
        <input
          id='address'
          type='text'
          className='rounded cursor-pointer border placeholder:font-light placeholder:opacity-70 px-3 py0.5'
          placeholder='address.'
        />
        <button
          onClick={() => {
            dispatch(closeAddImage())
          }}
          className='bg-oceanGreen text-white rounded-xl py-1 mt-3 hover:opacity-85 transition-all duration-200'
        >
          Add
        </button>
      </div>
      <IoCloseOutline
        className='absolute top-3 right-3 text-xl text-bitterSweet cursor-pointer hover:text-salmonPink transition-all duration-200'
        onClick={() => dispatch(closeAddImage())}
      />
    </div>
  )
}

export default AddImage
