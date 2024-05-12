'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import { useState, useEffect } from 'react'
import { GoTrash } from 'react-icons/go'
import { MdOutlineEdit } from 'react-icons/md'
import { IoCloseOutline } from 'react-icons/io5'
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

const truncateSummary = (summary: string) => {
  if (summary.length >= 110) {
    return `${summary.slice(0, 110)}...`
  } else {
    return summary
  }
}

const Articles = () => {
  const { articles }: { articles: articleType[] } = useSelector(
    (state: any) => state.user
  )
  const { user } = useSelector((state: any) => state.user)
  const [filteredArticles, setFilteredArticles] = useState<articleType[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [productName, setProductName] = useState<string>('')
  const [deleteId, setDeleteId] = useState<number>()
  const [toggleBox, setToggleBox] = useState<boolean>(false)

  useEffect(() => {
    articles && setFilteredArticles(articles)
    if (articles.length > 0) {
      const sortedArticles = [...articles].sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime()
      })
      setFilteredArticles(sortedArticles)
    }
  }, [articles])

  const typesArr = [
    'UI/UX',
    'GLOBAL',
    'SPORTS',
    'CLOTHING',
    'LIFE',
    'NATURE',
    'POLITICS',
  ]

  const filterPosts = (pushType: string) => {
    let updatedTypes = [...selectedTypes]
    if (updatedTypes.includes(pushType)) {
      updatedTypes = updatedTypes.filter((type) => {
        return type !== pushType
      })
    } else {
      updatedTypes = [...selectedTypes, pushType]
    }
    setSelectedTypes(updatedTypes)
    if (updatedTypes.length === 0) {
      return setFilteredArticles(articles)
    }
    const filteredArray = [...articles].filter((article: articleType) => {
      return article.types.some((type) => updatedTypes.includes(type))
    })

    setFilteredArticles(filteredArray)
  }

  const isTypeSelected = (type: string) => {
    if (selectedTypes.includes(type)) {
      return true
    } else {
      return false
    }
  }

  const truncateTitle = (title: string) => {
    if (title.length > 46) {
      return `${title.slice(0, 46)}...`
    } else {
      return title
    }
  }

  const deleteArticle = async () => {
    try {
      await axios.delete(`/articles/delete-article/${deleteId}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='py-5 px-10 relative'>
      <div
        className={`h-full w-screen fixed bg-spanishGray left-0 top-0 z-[30] ${
          toggleBox
            ? 'opacity-50 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-all ease`}
      />
      <header className='flex items-center gap-2 absolute top-4 left-5'>
        <Link href='/' className='text-2xl text-eerieBlack font-medium'>
          Anon
        </Link>
        <div className='w-[2px] h-[22px] bg-sonicSilver' />
        <span className='text-[15px] text-sonicSilver'>Articles</span>
      </header>
      <div className='flex items-center w-full justify-center gap-4 mt-12'>
        {typesArr.map((type: string, idx: number) => {
          return (
            <div
              onClick={() => filterPosts(type)}
              key={idx}
              className={`px-4 py-1 rounded-full border border-black icon-style transition-all duration-300 ease ${
                isTypeSelected(type)
                  ? 'bg-white text-black'
                  : 'bg-black text-white'
              }`}
            >
              {type}
            </div>
          )
        })}
      </div>
      <section className='mt-20 w-full flex items-center justify-center flex-wrap gap-5'>
        {filteredArticles.length > 0
          ? filteredArticles.map((article: articleType) => {
              return (
                <div
                  key={article.id}
                  className='w-[370px] group relative border h-[500px] pb-5 rounded-xl overflow-hidden flex flex-col items-center gap-3'
                >
                  <div className='w-full h-[170px]'>
                    <img
                      src={article.image}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <p className='w-full text-left px-[33.5px] text-spanishGray'>
                    {format(article.date, 'dd / MM / yyyy')}
                  </p>
                  <h2 className='font-medium capitalize text-[17px] h-[200px] px-5 text-center'>
                    {truncateTitle(article.title)}
                  </h2>
                  <div className='w-full min-h-[70px] flex justify-center items-center gap-3 flex-wrap px-5'>
                    {article.types.map((type: string, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className='bg-eerieBlack px-3 py-1 text-sm text-white rounded-full'
                        >
                          {type}
                        </div>
                      )
                    })}
                  </div>
                  <div className='w-full flex items-start px-7 gap-2'>
                    <span>author:</span>
                    <span className='text-eerieBlack font-medium'>
                      @{article.author}
                    </span>
                  </div>
                  <div className='w-full px-7 flex justify-center h-full place-items-center mt-1'>
                    <p className='w-full text-sonicSilver font-[400] opacity-80 text-sm text-left'>
                      {truncateSummary(article.summary)}
                    </p>
                  </div>
                  {article.user_id === user.id && (
                    <div className='absolute group-hover:translate-y-0 transition-all duration-500 ease translate-y-[65px] bottom-3 right-3 flex flex-col justify-center items-center gap-2'>
                      <GoTrash
                        onClick={() => {
                          setProductName(article.title)
                          setDeleteId(article.id)
                          setToggleBox(true)
                        }}
                        className='text-lg icon-style text-red-500 hover:text-bitterSweet transition-all duration-300 ease'
                      />
                      <Link href={`/articles/edit/${article.id}`}>
                        <MdOutlineEdit className='text-[19px] icon-style hover:text-eerieBlack text-black transition-all duration-300 ease' />
                      </Link>
                    </div>
                  )}
                </div>
              )
            })
          : ''}
      </section>
      <div
        className={`w-[350px] z-[80] transition-all duration-500 ease h-[170px] p-5 border bg-white fixed top-1/3 left-1/2 -translate-x-1/2 rounded-xl flex flex-col items-center gap-5 ${
          toggleBox
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <h2 className='w-[90%] text-center relative'>
          Delete{' '}
          <span className='font-medium text-eerieBlack'>"{productName}"</span> ?
          <IoCloseOutline
            onClick={() => setToggleBox(false)}
            className='absolute -top-2 -right-5 text-lg icon-style hover:text-red-600 transition-all duration-300 ease'
          />
        </h2>
        <div className='flex items-center gap-4 justify-center'>
          <button className='bg-black border transition-all duration-500 ease hover:bg-white hover:text-black border-black text-white px-4 py-1 rounded'>
            CANCEL
          </button>
          <button
            onClick={deleteArticle}
            className='text-red-600 border transition-all duration-500 ease hover:bg-red-600 hover:text-white border-red-600 rounded px-4 py-1'
          >
            CONFIRM
          </button>
        </div>
      </div>
    </main>
  )
}

export default Articles
