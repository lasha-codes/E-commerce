'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosArrowBack } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { Toaster, toast } from 'sonner'
import axios from 'axios'

interface articleType {
  image: string
  id: number
  user_id: number
  title: string
  summary: string
  author: string
  types: string[]
  date: string
}

const EditArticle = ({ params }: { params: { id: string } }) => {
  const [newImage, setNewImage] = useState<string>('')
  const [newTitle, setNewTitle] = useState<string>('')
  const [newSummary, setNewSummary] = useState<string>('')
  const [newSelectedTypes, setNewSelectedTypes] = useState<string[]>([])
  const [toggleBox, setToggleBox] = useState<boolean>(false)
  const [imageAddress, setImageAddress] = useState<string>('')
  const { articles, user }: { articles: articleType[]; user: any } =
    useSelector((state: any) => state.user)
  const [instance, setInstance] = useState<articleType>()

  let articleById: any

  const typesArr = [
    'UI/UX',
    'GLOBAL',
    'SPORTS',
    'CLOTHING',
    'LIFE',
    'NATURE',
    'POLITICS',
  ]

  useEffect(() => {
    articleById =
      articles &&
      articles.find((article: articleType) => {
        return article.id === parseInt(params.id)
      })
    setInstance(articleById)
    if (articleById) {
      setNewImage(articleById.image)
      setNewTitle(articleById.title)
      setNewSummary(articleById.summary)
      setNewSelectedTypes(articleById.types)
    }
    if (user && articleById && user.id !== parseInt(articleById?.user_id)) {
      window.location.href = '/'
    } else if (!user) {
      window.location.href = '/'
    }
  }, [articles, user])

  const checkSelected = (type: string) => {
    if (newSelectedTypes.includes(type)) {
      return true
    } else {
      return false
    }
  }

  const selectNewType = (type: string) => {
    let updatedTypes = [...newSelectedTypes]
    if (updatedTypes.includes(type)) {
      updatedTypes = updatedTypes.filter((newType: string) => {
        return type !== newType
      })
    } else {
      updatedTypes = [...newSelectedTypes, type]
    }
    setNewSelectedTypes(updatedTypes)
  }

  const confirmEdit = async () => {
    const firstTypes: any = instance && [...instance.types]
    const secondTypes = [...newSelectedTypes]
    let isSame = true
    if (firstTypes) {
      if (firstTypes.length !== secondTypes.length) {
        isSame = false
      } else {
        const sortedInstanceTypes = [...firstTypes].sort()
        const sortedNewSelectedTypes = [...secondTypes].sort()
        for (let i = 0; i < firstTypes.length; i++) {
          if (sortedInstanceTypes[i] !== sortedNewSelectedTypes[i]) {
            isSame = false
            break
          } else {
            isSame = true
          }
        }
      }
    }
    if (!newImage) {
      return toast.error('Image is required')
    }
    if (
      isSame &&
      newSummary === instance?.summary &&
      newTitle === instance?.title &&
      newImage === instance?.image
    ) {
      return toast.error('Something must be changed to update the post.')
    }
    if (newSelectedTypes.length > 5) {
      return toast.error('Max 5 types can be selected.')
    }
    await axios.put('/articles/update-article', {
      newTitle,
      newSummary,
      newTypes: newSelectedTypes,
      newImage,
    })
    setNewTitle('')
    setNewSummary('')
    setNewImage('')
    setNewSelectedTypes([])
    setImageAddress('')
    window.location.reload()
  }

  return (
    <main className='px-8 py-4 w-full relative'>
      <header className='w-full pb-4 flex justify-start items-center'>
        <Link
          href='/articles'
          className='icon-style bg-spanishGray opacity-50 p-[6px] rounded-full'
        >
          <IoIosArrowBack className='text-xl' />
        </Link>
      </header>
      <div className='w-full flex items-center justify-center mt-10'>
        <div className='w-[500px] flex flex-col items-start justify-center'>
          <h2 className='text-eerieBlack text-3xl font-medium'>
            Update Your Article
          </h2>
          <div className='w-full h-[400px] overflow-hidden border rounded-xl mt-10 flex justify-center items-center'>
            {!newImage ? (
              <FaCirclePlus
                onClick={() => setToggleBox(true)}
                className='text-[80px] icon-style'
              />
            ) : (
              <div className='w-full h-full relative'>
                <img src={newImage} className='w-full h-full object-cover' />
                <IoCloseOutline
                  onClick={() => setNewImage('')}
                  className='absolute z-[15] top-3 right-3 icon-style text-lg text-red-500 hover:text-oceanGreen transition-all !duration-700 ease'
                />
              </div>
            )}
          </div>
          <div className='w-full mt-10'>
            <form className='flex flex-col gap-6 items-start'>
              <div className='w-full flex flex-col items-start gap-1'>
                <label
                  htmlFor='title'
                  className='text-eerieBlack text-lg font-medium cursor-pointer'
                >
                  New title
                </label>
                <input
                  value={newTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewTitle(e.target.value)
                  }
                  type='text'
                  id='title'
                  className='border rounded px-4 py-1 w-full placeholder:opacity-80'
                  placeholder='New title for our article'
                />
              </div>
              <div className='w-full flex flex-col items-start gap-1'>
                <label
                  htmlFor='summary'
                  className='text-eerieBlack text-lg font-medium cursor-pointer'
                >
                  New summary
                </label>
                <textarea
                  value={newSummary}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setNewSummary(e.target.value)
                  }
                  id='summary'
                  className='border rounded px-4 py-1 w-full resize-none placeholder:opacity-80'
                  placeholder='New summary for our article'
                />
              </div>
            </form>
          </div>
          <div className='mt-6'>
            <div className='flex flex-col items-start'>
              <h3 className='text-lg mb-3 text-eerieBlack font-medium'>
                Select Type
              </h3>
              <div className='flex items-center max-w-[500px] flex-wrap gap-3 w-full'>
                {typesArr.map((type: string, idx: number) => {
                  return (
                    <div
                      onClick={() => selectNewType(type)}
                      key={idx}
                      className={`border border-oceanGreen icon-style px-3 py-1 rounded-full ${
                        checkSelected(type)
                          ? 'bg-white text-oceanGreen'
                          : 'bg-oceanGreen text-white'
                      }`}
                    >
                      {type}
                    </div>
                  )
                })}
              </div>
              <div className='w-full flex items-center flex-wrap gap-3 border-b py-4 mt-4'>
                {newSelectedTypes.map((type: string, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className='px-3 py-1 rounded-full selected-type bg-oceanGreen text-white'
                    >
                      {type}
                    </div>
                  )
                })}
              </div>
              <button
                onClick={confirmEdit}
                className='mx-auto bg-black text-white px-5 py-1 rounded mt-3 hover:bg-eerieBlack disabled:opacity-30 transition-all duration-300 ease'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed w-[400px] bg-white -translate-x-1/2 h-[200px] rounded-xl z-[70] border top-1/3 left-1/2 flex flex-col items-center gap-1 p-5 transition-all duration-700 ease ${
          !toggleBox
            ? 'pointer-events-none opacity-0 translate-y-10'
            : 'pointer-events-auto opacity-100 translate-y-0'
        }`}
      >
        <div className='relative'>
          <h2 className='text-eerieBlack font-medium text-lg'>
            Enter your image address
          </h2>
          <IoCloseOutline
            onClick={() => setToggleBox(false)}
            className='absolute -top-2 -right-20 text-lg icon-style hover:text-red-600 transition-all duration-300 ease'
          />
        </div>
        <input
          value={imageAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageAddress(e.target.value)
          }
          type='text'
          placeholder='Image address'
          className='border rounded px-4 py-1 w-[90%] mt-5'
        />
        <button
          onClick={() => {
            setNewImage(imageAddress)
            setToggleBox(false)
            setImageAddress('')
          }}
          className='text-white bg-oceanGreen px-7 py-1 rounded  mt-5 hover:opacity-80 transition-all duration-300 ease'
        >
          Add
        </button>
      </div>
      <Toaster />
    </main>
  )
}

export default EditArticle
