'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/components/ui/skeleton'

interface articleType {
  image: string
  id: number
  title: string
  summary: string
  author: string
  types: string[]
  date: string
}

const Articles = () => {
  const { articles }: { articles: articleType[] } = useSelector(
    (state: any) => state.user
  )
  return (
    <main className='py-5 px-10 relative'>
      <header className='flex items-center gap-2 absolute top-4 left-5'>
        <Link href='/' className='text-2xl text-eerieBlack font-medium'>
          Anon
        </Link>
        <div className='w-[2px] h-[22px] bg-sonicSilver' />
        <span className='text-[15px] text-sonicSilver'>Articles</span>
      </header>
      <section className='mt-20 w-full flex items-center justify-center flex-wrap gap-5'>
        {articles.length > 0
          ? articles.map((article: articleType) => {
              return (
                <div
                  key={article.id}
                  className='w-[300px] border  h-[400px] rounded-xl overflow-hidden flex flex-col items-center gap-3'
                >
                  <div className='w-full h-[170px] bg-black'>
                    <img
                      src={article.image}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <h2 className='font-medium capitalize text-lg'>
                    {article.title}
                  </h2>
                  <div className='w-full flex justify-center items-center gap-3 flex-wrap'>
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
                </div>
              )
            })
          : ''}
      </section>
    </main>
  )
}

export default Articles
