'use client'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

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
    console.log(newImage, newTitle, newSummary, newSelectedTypes)
  }, [articles])

  return <main className='px-8 py-5 w-full'></main>
}

export default EditArticle
