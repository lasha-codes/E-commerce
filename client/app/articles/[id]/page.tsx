'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'

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

const ArticleById = ({ params }: { params: { id: string } }) => {
  const { articles }: { articles: articleType[] } = useSelector(
    (state: any) => state.user
  )

  const articleById =
    articles &&
    articles.find((article: articleType) => {
      return article.id === parseInt(params.id)
    })

  return (
    <main className='pb-3'>
      <header className='flex items-center gap-3 px-5 py-4 border-b w-full'>
        <Link href='/' className='text-2xl font-medium'>
          Anon
        </Link>
        <div className='h-[22px] w-[2px] bg-sonicSilver' />
        <h3 className='text-sonicSilver text-sm opacity-80'>Article preview</h3>
      </header>
      <section className='px-10 mt-10 py-5 w-full flex justify-center items-center'>
        <div className='flex flex-col items-center gap-6'>
          <div className='flex flex-col items-start gap-7'>
            <div className='w-[700px] h-[400px] rounded-xl overflow-hidden'>
              <img
                src={articleById?.image}
                className='h-full w-full object-cover'
              />
            </div>
            <p className='text-sonicSilver text-lg'>
              {articleById && format(articleById.date, 'MM / dd / yyyy')}
            </p>
            <h2 className='text-[20px] text-eerieBlack font-medium'>
              {articleById?.title}
            </h2>
          </div>
          <div className='flex flex-col w-full items-start gap-3'>
            <div className='flex justify-center items-center gap-4 w-full flex-wrap px-5'>
              {articleById?.types.map((type: string, idx: number) => {
                return (
                  <div
                    key={idx}
                    className='text-lg bg-black text-white px-4 py-1 rounded-full'
                  >
                    {type}
                  </div>
                )
              })}
            </div>
            <div className='flex flex-col w-full items-start gap-5'>
              <div className='flex items-center gap-2'>
                <span>author:</span>
                <span className='font-semibold'>@{articleById?.author}</span>
              </div>
              <p className='w-[580px] text-sonicSilver'>
                {articleById?.summary}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArticleById
