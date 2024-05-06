'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosClose } from 'react-icons/io'
import axios from 'axios'

const AddArticle = () => {
  const [toggleLink, setToggleImage] = useState<boolean>(false)
  return (
    <main className='relative'>
      <div className={`fixed w-full h-full bg-sonicSilver z-[99] opacity-40`} />
      <header className='flex items-center gap-3 px-10 border-b pt-5 pb-4'>
        <Link href='/' className='text-eerieBlack text-2xl font-medium'>
          Anon
        </Link>
        <div className='h-[22px] w-[1px] bg-sonicSilver' />
        <span className='text-[16px] text-spanishGray'>Add Article</span>
      </header>
      <section className='w-full flex justify-center mt-20'>
        <div className='w-[700px] flex flex-col items-start justify-center gap-5'>
          <h1 className='text-left w-full text-3xl text-eerieBlack font-medium mb-5'>
            Write Your Article
          </h1>
          <div className='w-full cursor-pointer h-[500px] border rounded-xl flex justify-center items-center'>
            <FaCirclePlus className='text-[80px] icon-style' />
          </div>
        </div>
      </section>
      <div
        className={`w-[350px] h-[160px] border absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-start py-5 flex-col -translate-y-1/2 bg-white z-[999] rounded-xl gap-5`}
      >
        <h2 className='text-lg text-eerieBlack font-medium relative'>
          Enter Image Address
          <IoIosClose className='absolute top-[-10px] right-[-75px] icon-style text-2xl hover:text-red-600 transition-all duration-500 ease' />
        </h2>
        <div className='flex flex-col gap-3 items-center'>
          <input
            type='text'
            placeholder='Image Address'
            className='py-0.5 border rounded-xl px-4 placeholder:opacity-70'
          />
          <button className='bg-oceanGreen text-white h-[30px] flex items-center justify-center w-[100px] rounded-xl hover:opacity-80 transition-all duration-300 ease'>
            Add
          </button>
        </div>
      </div>
    </main>
  )
}

export default AddArticle
