import { FaCirclePlus } from 'react-icons/fa6'
import { IoArrowForwardOutline } from 'react-icons/io5'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSelector, useDispatch } from 'react-redux'
import AddImage from './AddImage'
import { openAddImage } from '../lib/features/products/productSlice'
import { FaMinus } from 'react-icons/fa'
import { useState } from 'react'

interface ProductState {
  addedImages: string[]
  toggle: boolean
}

const AddProduct = () => {
  const dispatch = useDispatch()
  const { addedImages, toggle }: ProductState = useSelector(
    (state: any) => state.product
  )
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  return (
    <main className='w-full flex flex-col justify-start h-screen items-center gap-10 overflow-x-hidden relative'>
      <div
        className={`absolute w-full h-screen opacity-50 bg-spanishGray z-[80] ${
          toggle ? 'block' : 'hidden'
        }`}
      ></div>
      <header className='w-full border-b px-5 py-3'>
        <div className='flex items-center gap-3'>
          <h1 className='text-2xl font-medium'>Anon</h1>
          <div className='h-[22px] w-[1px] bg-spanishGray' />
          <h3 className='text-sonicSilver'>Add Product</h3>
        </div>
      </header>
      <div className='flex items-start gap-16 px-20  max-lg:px-5 max-lg:flex-col max-lg:gap-5 '>
        <div
          className={`${
            toggle
              ? 'opacity-100 translate-y-0'
              : 'translate-y-5 opacity-0 pointer-events-none'
          } transition-all duration-300 absolute top-[30%] right-[50vw] z-[100]`}
        >
          <AddImage />
        </div>

        <div className='flex flex-col gap-2'>
          <span className='flex items-center gap-2'>
            <FaMinus className='text-lg text-[#2d5c99]' />
            <span className='text-eerieBlack font-medium'>
              Product Information
            </span>
          </span>
          <span className='flex items-center gap-2'>
            <FaMinus className='text-lg text-[#2d5c99]' />
            <span className='text-eerieBlack font-medium'>Review</span>
          </span>
        </div>
        <div className='flex flex-col gap-10 md:w-[600px] max-md:w-full max-lg:mx-auto'>
          <h1 className='text-3xl font-medium'>Product Information</h1>
          <form className='w-full'>
            <div className='border gap-3 flex items-center rounded-xl p-2'>
              <div
                onClick={() => dispatch(openAddImage())}
                className='p-9 w-fit rounded-xl bg-cultured border border-dashed cursor-pointer'
              >
                <FaCirclePlus className='text-3xl' />
              </div>
              {addedImages &&
                addedImages.map((address, idx) => {
                  return (
                    <img
                      key={idx}
                      src={address}
                      alt={`added/image${idx}`}
                      className='h-[100px] rounded-xl w-[120px] object-cover'
                    />
                  )
                })}
            </div>
            <div className='flex flex-col gap-4 mt-5 border-b pb-5'>
              <div className='flex flex-col gap-1'>
                <label
                  htmlFor='name'
                  className='text-eerieBlack text-[15.5px] max-lg:hidden'
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  type='text'
                  id='name'
                  className='border rounded px-4 py-0.5 placeholder:text-sm placeholder:opacity-60 placeholder:font-light cursor-pointer'
                  placeholder='Name'
                />
              </div>
              <div className='w-full'>
                <div className='flex flex-col gap-1'>
                  <label
                    htmlFor='desc'
                    className='text-eerieBlack text-[15.5px] max-lg:hidden'
                  >
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                    id='desc'
                    className='border rounded w-full pt-4 px-4 placeholder:text-sm placeholder:opacity-60 resize-none placeholder:font-light cursor-pointer'
                    placeholder='Enter product description.'
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <h2 className='text-xl mb-5 text-oceanGreen'>Additional info</h2>
              <div className='flex items-center gap-4'>
                <div className='flex flex-col gap-1'>
                  <input
                    value={price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPrice(e.target.value)
                    }
                    type='number'
                    id='price'
                    className='border rounded w-[200px] min-h-[36px] py-0.5 px-4 placeholder:text-sm placeholder:opacity-60 resize-none placeholder:font-light cursor-pointer'
                    placeholder='0$'
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className='w-[200px] rounded'>
                      <SelectValue placeholder='Product type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem className='cursor-pointer' value='sweater'>
                        Sweater
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='jacket'>
                        Jacket
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='dress'>
                        Dress
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer'
                        value='Winter Wear'
                      >
                        Winter Wear
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer'
                        value='Hats & Caps'
                      >
                        Hats & Caps
                      </SelectItem>
                      <SelectItem
                        className='cursor-pointer'
                        value='Shirts & Jeans'
                      >
                        Shorts & Jeans
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='Glasses'>
                        Glasses
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='Watch'>
                        Watch
                      </SelectItem>
                      <SelectItem className='cursor-pointer' value='Perfume'>
                        Perfume
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className='w-full justify-between flex items-end'>
              <button
                className='underline text-eerieBlack hover:font-medium'
                type='button'
              >
                Cancel
              </button>
              <button
                type='button'
                className='bg-eerieBlack gap-0.5 flex items-center text-white rounded-full px-5 py-1.5 mt-5 group hover:opacity-80 transition-all duration-300 ease-in-out'
              >
                Continue
                <IoArrowForwardOutline className='group-hover:translate-x-2 transition-all duration-300 ease' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default AddProduct
