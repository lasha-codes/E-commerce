'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosArrowBack } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'

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
  const { articles }: { articles: articleType[] } = useSelector(
    (state: any) => state.user
  )
  let articleById

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
    if (articleById) {
      setNewImage(articleById.image)
      setNewTitle(articleById.title)
      setNewSummary(articleById.summary)
      setNewSelectedTypes(articleById.types)
    }
  }, [articles])

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
              <FaCirclePlus className='text-[80px] icon-style' />
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
              <button className='mx-auto bg-black text-white px-5 py-1 rounded mt-3 hover:bg-eerieBlack transition-all duration-300 ease'>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default EditArticle
