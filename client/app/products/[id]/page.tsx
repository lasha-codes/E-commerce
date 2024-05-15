'use client'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IoBagHandleOutline, IoGitCompareOutline } from 'react-icons/io5'
import { addToWatchList } from '@/app/lib/features/tabs/tabsSlice'
import { addItemToCart } from '@/app/lib/features/tabs/tabsSlice'
import { Toaster } from 'sonner'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import axios from 'axios'
import { format } from 'date-fns'
import { addProductToCompare } from '@/app/lib/features/products/productSlice'

interface ParamsType {
  params: {
    id: any
  }
}

interface productType {
  id: number
  title: string
  description: string
  sold: number
  price: number
  discountedPrice: number | null
  image: string[]
  type: string
}

interface reviewType {
  id: number
  product_id: number
  comment: string
  review: number
  author: string
  title: string
  date: string
}

interface selectTypes {
  products: productType[]
  productReviews: reviewType[]
}

const SingleProduct: React.FC<ParamsType> = ({ params }) => {
  const router = useRouter()
  const [rating, setRating] = useState<number>(1)
  const [title, setTitle] = useState<string>('')
  const [currentProductReviews, setCurrentProductReviews] = useState<any>([])
  const [description, setDescription] = useState<string>('')
  const dispatch = useDispatch()
  const { products, productReviews }: selectTypes = useSelector(
    (state: any) => state.product
  )
  const { user } = useSelector((state: any) => state.user)
  const { watchList }: { watchList: [productType] } = useSelector(
    (state: any) => state.tabs
  )
  const reviews = [1, 2, 3, 4, 5]

  useEffect(() => {
    const currentReviews = productReviews.filter((review) => {
      return review.product_id === parseInt(params.id)
    })
    setCurrentProductReviews(currentReviews)
  }, [params.id, productReviews])

  const productById: productType | any = products.find(
    (product: productType) => {
      return product.id === parseInt(params.id)
    }
  )

  if (!productById) {
    return <p>Loading...</p>
  }

  const productLiked = watchList.find((product: productType) => {
    return product.id === productById.id
  })

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!user.email) {
        return router.push('/user/login')
      }
      if (!title || !description) {
        return toast.error('Both fields are required.')
      }
      await axios.post(
        'https://anon-api.onrender.com/products/add-review',
        {
          id: params.id,
          comment: description,
          title,
          review: rating,
        },
        { withCredentials: true }
      )
      setCurrentProductReviews((prev: any) => [
        ...prev,
        {
          title,
          comment: description,
          product_id: params.id,
          review: rating,
          author: user.username,
          date: new Date(),
        },
      ])
      setDescription('')
      setRating(1)
      setTitle('')
      toast.success('Thanks for the review!')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <main className='w-full p-12 bg-[#fafafa] h-screen overflow-y-scroll'>
      <div className='flex flex-col items-center'>
        <div className='w-[80%] flex items-center max-xl:flex-col drop-shadow-md bg-white rounded-xl p-8 justify-around gap-10'>
          <Carousel className='max-w-[500px] max-md:max-w-[300px]'>
            <CarouselContent>
              <CarouselItem className='w-[500px] max-md:w-[300px] max-md:h-[350px] p-16 h-[450px] max-md:p-5 rounded-2xl overflow-hidden'>
                <img
                  src={productById.image[0]}
                  className='w-full h-full object-contain'
                />
              </CarouselItem>
              <CarouselItem className='w-[500px] max-md:w-[300px] max-md:h-[350px] p-16 h-[450px] max-md:p-5 rounded-2xl overflow-hidden'>
                <img
                  src={productById.image[1]}
                  className='w-full h-full object-contain'
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className='absolute right-5 max-md:hidden' />
            <CarouselPrevious className='absolute left-5 max-md:hidden' />
          </Carousel>

          <div className='flex flex-col items-start gap-10'>
            <div className='flex flex-col gap-3'>
              <h2 className='text-3xl text-eerieBlack font-semibold max-md:text-2xl max-sm:text-xl'>
                {productById.title}
              </h2>
              <span className='text-salmonPink text-xl max-md:text-lg max-sm:text-[16.5px] uppercase font-medium'>
                {productById.type}
              </span>
            </div>
            <p className='max-w-[500px] text-spanishGray opacity-90 text-[17px] max-md:text-sm'>
              {productById.description.length > 250
                ? productById.description.slice(0, 250)
                : productById.description}{' '}
              {productById.description.length > 250 && '...'}
            </p>
          </div>
        </div>
        <div className='mt-6 flex w-full justify-center flex-wrap items-center gap-6'>
          <button
            onClick={() => dispatch(addItemToCart(productById))}
            className='flex items-center gap-2.5 text-white bg-eerieBlack px-5 py-2 rounded-[2px] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95'
          >
            <span>Add to cart</span>
            <IoBagHandleOutline className='text-[21px]' />
          </button>
          <button
            onClick={() => dispatch(addToWatchList(productById))}
            className='flex overflow-hidden items-center w-[170px] justify-center gap-2.5 relative h-[40px] text-white bg-cultured px-5 py-2 rounded-[2px] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95'
          >
            <span
              className={`text-eerieBlack absolute left-4 transition-all duration-300 ease-in-out ${
                productLiked ? 'translate-y-[30px]' : 'translate-y-[0]'
              }`}
            >
              Add to wishlist
            </span>
            <span
              className={`text-eerieBlack absolute left-4 transition-all duration-300 ease-in-out ${
                !productLiked ? 'translate-y-[30px]' : 'translate-y-[0]'
              }`}
            >
              Unlike product
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill={productLiked ? '#200' : 'none'}
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='#200'
              className='w-5 h-5 absolute right-4 transition-all duration-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </button>
          <button
            onClick={() => dispatch(addProductToCompare(productById))}
            className='flex items-center gap-2.5 text-white bg-eerieBlack px-5 py-2 rounded-[2px] hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95'
          >
            Add compare list
            <IoGitCompareOutline />
          </button>
        </div>
        <div className='w-[80%] flex mt-6 items-end max-2xl:flex-col max-2xl:justify-center max-2xl:items-center gap-10 justify-between'>
          <div className='flex flex-col gap-5 items-start'>
            <h2 className='text-eerieBlack text-2xl font-medium'>Reviews</h2>
            <div className='bg-white w-[600px] max-lg:w-[680px] max-md:w-[500px] max-sm:w-[430px] max-2xl:w-[800px] h-[300px] py-6 px-10 drop-shadow-sm rounded-xl'>
              <h3 className='text-xl font-medium mb-3'>Add a review</h3>
              <div className='flex items-center mb-4'>
                {reviews.map((star: number) => {
                  return (
                    <svg
                      onClick={() => setRating(star)}
                      key={star}
                      xmlns='http://www.w3.org/2000/svg'
                      fill={star <= rating ? 'black' : 'none'}
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-8 h-8 cursor-pointer icon-style transition-all duration-300'
                    >
                      <path
                        className='transition-all duration-300'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                      />
                    </svg>
                  )
                })}
              </div>
              <form
                onSubmit={submitReview}
                className='w-full items-start flex flex-col gap-4'
              >
                <div className='flex flex-col w-full items-start gap-3'>
                  <input
                    value={title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setTitle(e.target.value)
                    }
                    className='rounded-[5px] border w-full placeholder:opacity-80 py-1 px-3 text-eerieBlack capitalize'
                    placeholder='Title'
                  />

                  <textarea
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                    className='rounded-[5px] border w-full placeholder:opacity-80 py-1 px-3 resize-none'
                    placeholder='Product Review'
                  />
                </div>
                <button className='bg-eerieBlack hover:opacity-80 transition-all duration-300 ease text-white py-1.5 px-5 rounded-[5px]'>
                  Submit review
                </button>
              </form>
            </div>
          </div>
          <div className='w-[600px] h-[300px] overflow-y-scroll reviews bg-white max-2xl:w-[800px] rounded-xl text-xl p-5 px-10 max-lg:w-[680px] max-md:w-[500px] max-sm:w-[430px]'>
            <h3 className='border-b pb-3 text-xl font-medium text-eerieBlack'>
              All reviews
            </h3>
            {currentProductReviews.length === 0 && (
              <p className='w-full text-center mt-3 text-sonicSilver text-lg'>
                No Reviews.
              </p>
            )}
            <div className='flex flex-col items-start px-2 py-5 gap-5'>
              {currentProductReviews &&
                currentProductReviews.map((review: reviewType, idx: number) => {
                  return (
                    <div key={idx} className='border-b pb-5 w-full'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center'>
                          {reviews.map((star: number) => {
                            return (
                              <svg
                                key={star}
                                xmlns='http://www.w3.org/2000/svg'
                                fill={star <= review.review ? 'black' : 'none'}
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-7 h-7'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                                />
                              </svg>
                            )
                          })}
                        </div>
                        <span className='text-spanishGray text-[17px]'>
                          {format(review.date, 'yyyy-MM-dd')}
                        </span>
                      </div>
                      <div className='flex flex-col gap-1'>
                        <h2 className='text-eerieBlack capitalize text-[19px] font-medium'>
                          {review.title}
                        </h2>
                        <p className='text-[16px] text-sonicSilver'>
                          {review.comment}
                        </p>
                        <span className='text-[16px] font-medium'>
                          by @{review.author}
                        </span>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default SingleProduct
