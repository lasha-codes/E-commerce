import { IoCloseOutline } from 'react-icons/io5'
import { closeAddImage, addImage } from '../lib/features/products/productSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { toast } from 'sonner'

const AddImage = () => {
  const [address, setAddress] = useState<string>('')
  const dispatch = useDispatch()
  return (
    <div className='relative bg-white w-[300px] h-[180px] translate-x-[50%] translate-y-[50%] z-[999] flex justify-center items-center rounded shadow-sm shadow-cultured'>
      <div className='flex gap-2 flex-col'>
        <label htmlFor='address' className='cursor-pointer text-eerieBlack'>
          Enter image address
        </label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id='address'
          type='text'
          className='rounded cursor-pointer border placeholder:font-light placeholder:opacity-70 px-3 py-1'
          placeholder='address.'
        />
        <button
          onClick={() => {
            if (address.length > 350) {
              return toast.error("base 64 isn't allowed.")
            } else if (address.length === 0) {
              return toast.error("address can't be null")
            }
            dispatch(addImage({ address }))
            dispatch(closeAddImage())
            setAddress('')
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
