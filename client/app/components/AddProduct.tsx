import { FaCirclePlus } from 'react-icons/fa6'
import { IoArrowForwardOutline } from 'react-icons/io5'
import { FcCheckmark } from 'react-icons/fc'
import { BiDollar } from 'react-icons/bi'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useSelector, useDispatch } from 'react-redux'
import AddImage from './AddImage'
import {
  openAddImage,
  continueProduct,
} from '../lib/features/products/productSlice'
import { FaMinus } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'

interface ProductState {
  addedImages: string[]
  toggle: boolean
  continued: boolean
}

const AddProduct = () => {
  const dispatch = useDispatch()
  const { addedImages, toggle, continued }: ProductState = useSelector(
    (state: any) => state.product
  )
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<number | string>('')
  const [type, setType] = useState<string>('')

  const continuePost = () => {
    if (
      description.length === 0 ||
      name.length === 0 ||
      price.toString().length === 0 ||
      type.length === 0
    ) {
      return toast.error('All of the fields are required')
    }
    if (addedImages.length !== 2) {
      return toast.error('U must have 2 photos')
    }
    dispatch(continueProduct())
  }

  const returnPricingModel = () => {
    if (Number(price) >= 200 && Number(price) <= 500) {
      return 'Standard Pricing'
    } else if (Number(price) >= 500) {
      return 'High Pricing'
    } else {
      return 'Low Pricing'
    }
  }

  return (
    <main className='w-full flex flex-col overflow-hidden justify-start h-screen items-center gap-10  relative'>
      <div
        className={`${
          toggle
            ? 'opacity-100 translate-y-0'
            : 'translate-y-8 opacity-0 pointer-events-none'
        } transition-all duration-300 absolute top-[25vh] right-[50%] z-[100]`}
      >
        <AddImage />
      </div>
      <div
        className={`absolute w-screen h-screen opacity-50 top-0 right-0 bg-spanishGray z-[80] ${
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
      <div
        className={`flex flex-col transition-all duration-1000 ease-in-out ${
          continued ? 'translate-y-[-100vh]' : 'translate-y-0'
        }`}
      >
        <div className='flex items-start h-screen gap-16 px-20  max-lg:px-5 max-lg:flex-col max-lg:gap-5'>
          <div className='flex flex-col gap-2 relative'>
            <span className='flex items-center gap-2'>
              <div className='w-[20px] flex justify-center items-center overflow-hidden relative h-[20px]'>
                <FaMinus
                  className={`text-lg text-[#2d5c99] absolute transition-all duration-500 ease-in-out ${
                    continued ? 'translate-x-[-30px]' : 'translate-x-0'
                  }`}
                />
                <FcCheckmark
                  className={`absolute transition-all duration-500 ease-in-out ${
                    continued ? 'translate-x-0' : 'top-[50%] translate-x-[30px]'
                  }`}
                />
              </div>
              <span className='text-eerieBlack font-medium'>
                Product Information
              </span>
            </span>
            <span className='flex items-center gap-2'>
              <FaMinus className='text-lg text-[#2d5c99]' />

              <span className='text-eerieBlack font-medium'>Review</span>
            </span>
          </div>
          <div className='flex flex-col gap-10 md:w-[600px] max-md:w-full max-lg:mx-auto h-screen'>
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
                <h2 className='text-xl mb-5 text-oceanGreen'>
                  Additional info
                </h2>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col gap-1'>
                    <input
                      value={price}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPrice(Number(e.target.value))
                      }
                      type='number'
                      id='price'
                      className='border rounded w-[200px] min-h-[36px] py-0.5 px-4 placeholder:text-sm placeholder:opacity-60 resize-none placeholder:font-light cursor-pointer'
                      placeholder='0$'
                    />
                  </div>
                  <div>
                    <Select onValueChange={(value) => setType(value)}>
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
                <Link
                  href='/'
                  className='underline text-eerieBlack hover:font-medium'
                  type='button'
                >
                  Cancel
                </Link>
                <button
                  onClick={continuePost}
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
        <div className='flex items-start h-screen overflow-y-scroll section gap-16 px-20 max-lg:px-14 max-lg:flex-col max-lg:gap-5 '>
          <div className='flex flex-col gap-2'>
            <span className='flex items-center gap-2'>
              <div className='w-[20px] flex justify-center items-center overflow-hidden relative h-[20px]'>
                <FaMinus
                  className={`text-lg text-[#2d5c99] absolute transition-all duration-500 ease-in-out ${
                    continued ? 'translate-x-[-30px]' : 'translate-x-0'
                  }`}
                />
                <FcCheckmark
                  className={`absolute transition-all duration-500 ease-in-out ${
                    continued ? 'translate-x-0' : 'top-[50%] translate-x-[30px]'
                  }`}
                />
              </div>
              <span className='text-eerieBlack font-medium'>
                Product Information
              </span>
            </span>
            <span className='flex items-center gap-2'>
              <FaMinus className='text-lg text-[#2d5c99]' />
              <span className='text-eerieBlack font-medium'>Review</span>
            </span>
          </div>
          <div className='flex flex-col gap-10 md:w-[600px] max-md:w-full max-lg:mx-auto items-center'>
            <div>
              <div className='flex items-center justify-center gap-10'>
                {addedImages &&
                  addedImages.map((address, idx) => {
                    return (
                      <div key={idx} className='flex flex-col gap-5'>
                        <h3 className='text-2xl'>{idx + 1}</h3>
                        <div className='h-[250px] w-[300px] max-md:w-full max-md:h-auto max-h-[300px] border rounded-xl overflow-hidden hover:scale-105 transition-all duration-300m ease-in'>
                          <img
                            src={address}
                            className='w-full h-full object-cover hover:h-[110%] hover:w-[110%] transition-all duration-500'
                          />
                        </div>
                      </div>
                    )
                  })}
              </div>
              <div className='flex flex-col gap-5 border-b pt-2 pb-7'>
                <h2 className='font-semibold filter text-center w-full text-2xl pt-5 pb-7 border-b'>
                  {name}
                </h2>
                <div>
                  <div>
                    <h2 className='text-lg text-oceanGreen mb-5 font-medium'>
                      ProductDetails
                    </h2>
                  </div>
                  <div className='mt-3 flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-[15.5px] text-spanishGray'>
                        Product Name
                      </h4>
                      <p>{name}</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <h4 className='text-[15.5px] text-spanishGray'>
                        Product Description
                      </h4>
                      <p className='max-w-[330px]'>{description}</p>
                    </div>
                    <div className='flex items-center justify-between mt-2'>
                      <p className='text-[14.5px] text-spanishGray'>
                        Product Type
                      </p>
                      <span className='text-eerieBlack text-[15px]'>
                        {type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <h1 className='font-medium text-lg text-oceanGreen filter'>
                  Pricing Details
                </h1>
                <div className='w-full h-[30px] flex items-center justify-between px-5 bg-cultured rounded mt-3'>
                  <span className='text-[15px] text-spanishGray filter'>
                    PRICE
                  </span>
                  <span className='text-[15px] text-spanishGray filter'>
                    PRICING MODEL
                  </span>
                  <span></span>
                </div>
                <div className='w-full flex justify-between items-center px-5 mt-2'>
                  <span className='flex items-center'>
                    <BiDollar />
                    {price}
                  </span>
                  <span>{returnPricingModel()}</span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddProduct
