'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaCirclePlus, FaLeaf } from 'react-icons/fa6'
import { IoIosClose } from 'react-icons/io'
import { Toaster, toast } from 'sonner'
import { IoCloseOutline } from 'react-icons/io5'
import axios from 'axios'

const AddArticle = () => {
  const [toggleLink, setToggleLink] = useState<boolean>(false)
  const [imageAddress, setImageAddress] = useState<string>('')
  const [displayImage, setDisplayImage] = useState<string>('')
  const [postTitle, setPostTitle] = useState<string>('')
  const [summary, setSummary] = useState<string>('')
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const typesArr = [
    'UI/UX',
    'GLOBAL',
    'SPORTS',
    'CLOTHING',
    'LIFE',
    'NATURE',
    'POLITICS',
  ]

  console.log(selectedTypes)

  useEffect(() => {
    const handleCloseBox = () => {
      setToggleLink(false)
    }
    window.addEventListener('click', handleCloseBox)

    return () => {
      window.removeEventListener('click', handleCloseBox)
    }
  }, [])

  const addImage = () => {
    if (imageAddress.trim().length === 0) {
      return toast.error('Address Cant be empty.')
    } else if (imageAddress.length >= 300) {
      return toast.error('Big Urls Are not allowed!')
    }
    setDisplayImage(imageAddress)
    setToggleLink(false)
    setImageAddress('')
  }

  const selectType = (type: string) => {
    if (selectedTypes.includes(type)) {
      return
    }
    setSelectedTypes((prev) => [...prev, type])
  }

  const checkTypeSelected = (type: string) => {
    if (selectedTypes.includes(type)) {
      return true
    } else {
      return false
    }
  }

  return (
    <main className='relative pb-10'>
      <div
        className={`fixed w-full h-full bg-sonicSilver z-[99] pointer-events-none opacity-0 ${
          toggleLink && 'opacity-40 pointer-events-auto'
        }`}
      />
      <header className='flex items-center gap-3 px-10 border-b pt-5 pb-4'>
        <Link href='/' className='text-eerieBlack text-2xl font-medium'>
          Anon
        </Link>
        <div className='h-[22px] w-[1px] bg-sonicSilver' />
        <span className='text-[16px] text-spanishGray'>Add Article</span>
      </header>
      <section className='w-full flex flex-col items-center justify-center mt-8'>
        <div className='w-[500px] flex flex-col items-start justify-center gap-5'>
          <h1 className='text-left w-full text-3xl text-eerieBlack font-medium mb-5'>
            Write Your Article
          </h1>
          <div className='w-full'>
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
              className='w-full cursor-pointer h-[370px] relative border rounded-xl flex justify-center items-center overflow-hidden'
            >
              {displayImage ? (
                <>
                  <img
                    src={displayImage}
                    alt='Display image for the article'
                    className='w-full h-full object-cover'
                  />
                  <IoCloseOutline
                    onClick={() => setDisplayImage('')}
                    className='z-[50] absolute top-2 right-3 text-2xl icon-style icon-style text-red-500 hover:text-oceanGreen transition-all duration-500 ease'
                  />
                </>
              ) : (
                <FaCirclePlus
                  className='text-[80px] icon-style'
                  onClick={() => setToggleLink(true)}
                />
              )}
            </div>
          </div>
          <div className='w-full mt-6'>
            <form className='w-full flex flex-col items-start gap-6'>
              <div className='flex flex-col items-start gap-1 w-full'>
                <label
                  htmlFor='postTitle'
                  className='text-[16.5px] font-medium text-eerieBlack cursor-pointer'
                >
                  Title
                </label>
                <input
                  id='postTitle'
                  type='text'
                  value={postTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPostTitle(e.target.value)
                  }
                  className='border rounded w-full px-5 py-1 placeholder:text-spanishGray placeholder:opacity-60'
                  placeholder='Title for your article'
                />
              </div>
              <div className='flex flex-col items-start gap-1 w-full'>
                <label
                  htmlFor='postDesc'
                  className='text-[16.5px] font-medium text-eerieBlack cursor-pointer'
                >
                  Summary
                </label>
                <input
                  id='postDesc'
                  type='text'
                  value={summary}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSummary(e.target.value)
                  }
                  className='border rounded w-full px-5 py-1 placeholder:text-spanishGray placeholder:opacity-60'
                  placeholder='Summary for your article'
                />
              </div>
              <div className='flex flex-col items-start gap-4'>
                <h3 className='text-[16.5px] font-medium text-eerieBlack'>
                  Select Type
                </h3>
                <div className='flex items-center gap-2 flex-wrap w-full'>
                  {typesArr.map((type: string, idx: number) => {
                    return (
                      <div
                        onClick={() => selectType(type)}
                        key={idx}
                        className={`icon-style rounded-full px-3 py-1 ${
                          checkTypeSelected(type)
                            ? 'border-oceanGreen border text-oceanGreen'
                            : 'bg-oceanGreen text-white'
                        }`}
                      >
                        {type}
                      </div>
                    )
                  })}
                </div>
                <div className='flex gap-2 items-center w-full flex-wrap border-b py-5'>
                  {selectedTypes.map((type: string, idx: number) => {
                    return (
                      <div
                        key={idx}
                        className='bg-oceanGreen text-white px-3 py-1 rounded-full'
                      >
                        {type}
                      </div>
                    )
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[350px] h-[160px] border absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-start py-5 flex-col transition-all duration-500 ease -translate-y-1/2 bg-white z-[999] rounded-xl gap-5 ${
          toggleLink
            ? 'opacity-100 transform-y-0 pointer-events-auto'
            : 'translate-y-5 opacity-0 pointer-events-none'
        }`}
      >
        <h2 className='text-lg text-eerieBlack font-medium relative'>
          Enter Image Address
          <IoIosClose
            onClick={() => setToggleLink(false)}
            className='absolute top-[-10px] right-[-75px] icon-style text-2xl hover:text-red-600 transition-all duration-700 ease'
          />
        </h2>
        <div className='flex flex-col gap-3 items-center'>
          <input
            value={imageAddress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImageAddress(e.target.value)
            }
            type='text'
            placeholder='Image Address'
            className='py-0.5 border rounded-xl px-4 placeholder:opacity-70'
          />
          <button
            onClick={addImage}
            className='bg-oceanGreen text-white h-[30px] flex items-center justify-center w-[100px] rounded-xl hover:opacity-80 transition-all duration-300 ease'
          >
            Add
          </button>
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default AddArticle
