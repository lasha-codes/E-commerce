'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/components/ui/skeleton'
import { format } from 'date-fns'
import { useState, useEffect } from 'react'

interface articleType {
  image: string
  id: number
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
  const [filteredArticles, setFilteredArticles] = useState<articleType[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  useEffect(() => {
    articles && setFilteredArticles(articles)
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

  return (
    <main className='py-5 px-10 relative'>
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
                  className='w-[350px] border h-[460px] pb-5 rounded-xl overflow-hidden flex flex-col items-center gap-3'
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
                  <h2 className='font-medium capitalize text-lg'>
                    {article.title}
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
                </div>
              )
            })
          : ''}
      </section>
    </main>
  )
}

export default Articles
