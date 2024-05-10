'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { IoIosArrowBack } from 'react-icons/io'

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
    const articleById =
      articles &&
      articles.find((article: articleType) => {
        return article.id === parseInt(params.id)
      })
    if (articleById) {
      setNewImage(articleById.image)
      setNewTitle(articleById.summary)
      setNewSummary(articleById.summary)
      setNewSelectedTypes(articleById.types)
    }
  }, [articles])

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
            Write Your Article
          </h2>
          <div className='w-full h-[400px] border rounded-xl mt-10 flex justify-center items-center'>
            <FaCirclePlus className='text-[80px] icon-style' />
          </div>
          <div className='w-full mt-10'>
            <form className='flex flex-col gap-6 items-start'>
              <div className='w-full flex flex-col items-start gap-1'>
                <label
                  htmlFor='title'
                  className='text-eerieBlack text-lg font-medium'
                >
                  New title
                </label>
                <input
                  type='text'
                  id='title'
                  className='border rounded px-4 py-1 w-full cursor-pointer placeholder:opacity-80'
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
              <div className='flex items-center w-full flex-wrap gap-3'>
                {typesArr.map((type: string, idx: number) => {
                  return (
                    <div
                      className={`bg-oceanGreen icon-style text-white px-3 py-1 rounded-full`}
                    >
                      {type}
                    </div>
                  )
                })}
              </div>
              <div className='w-full flex items-center gap-3 border-b py-4 mt-4'></div>
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
