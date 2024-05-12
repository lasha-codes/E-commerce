'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'

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
    </main>
  )
}

export default ArticleById
