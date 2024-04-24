'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { LuDollarSign } from 'react-icons/lu'
import { Toaster } from 'sonner'
import {
  IoEyeOutline,
  IoBagAddOutline,
  IoGitCompareOutline,
} from 'react-icons/io5'
import Link from 'next/link'
import { addItemToCart } from '../lib/features/tabs/tabsSlice'
import { addToWatchList } from '../lib/features/tabs/tabsSlice'
import { itemFilterData } from '../data/data'
import { FilterGenderData } from '../data/data'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
}

const ProductsPage = () => {
  const dispatch = useDispatch()
  const [productsCopy, setProductsCopy] = useState<ProductType[]>([])
  const [checkedTypeList, setCheckedTypeList] = useState<string[]>([])
  const [genderCheckedList, setGenderCheckedList] = useState<string[]>([])
  const [notProductFound, setNoProductFound] = useState<boolean>(false)
  const { products }: { products: ProductType[] } = useSelector(
    (state: any) => state.product
  )
  const { watchList }: { watchList: ProductType[] } = useSelector(
    (state: any) => state.tabs
  )

  useEffect(() => {
    products && setProductsCopy(products)
  }, [products])

  const filterProductsByType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typeValue = e.target.value.toLowerCase()
    let updatedCheckedTypeList

    if (!checkedTypeList.includes(typeValue)) {
      updatedCheckedTypeList = [...checkedTypeList, typeValue]
    } else {
      updatedCheckedTypeList = checkedTypeList.filter(
        (type) => type.toLowerCase() !== typeValue
      )
    }
    let filterArr: any[] = []
    setCheckedTypeList(updatedCheckedTypeList)

    if (updatedCheckedTypeList.length === 0) {
      setNoProductFound(false)
      return setProductsCopy(products)
    }
    if (genderCheckedList.length === 0) {
      filterArr = products.filter((product) =>
        updatedCheckedTypeList.includes(product.type.toLowerCase())
      )
    } else {
      filterArr = products.filter((product: ProductType) => {
        return (
          updatedCheckedTypeList.includes(product.type.toLowerCase()) &&
          genderCheckedList.includes(product.gender.toLowerCase())
        )
      })
    }
    if (filterArr.length === 0) {
      setNoProductFound(true)
    } else {
      setNoProductFound(false)
    }
    setProductsCopy(filterArr)
  }

  const getRating = (ratingArr: number[]) => {
    if (ratingArr.length === 0) {
      return <span className='uppercase'>Not Rated</span>
    } else {
      const ratingTotal = ratingArr.reduce((acc, num) => acc + num, 0)
      const ratingAverage = ratingTotal
      return Math.round(ratingAverage / ratingArr.length)
    }
  }

  const starsArr = [1, 2, 3, 4, 5]

  const filterProductsByGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gender = e.target.value.toLowerCase()
    let updatedGenderList: string[] = [...genderCheckedList]
    if (!genderCheckedList.includes(gender)) {
      updatedGenderList = [...genderCheckedList, gender]
    } else {
      updatedGenderList = updatedGenderList.filter((value) => {
        return value !== gender
      })
    }
    let filteredByGender
    setGenderCheckedList(updatedGenderList)
    if (updatedGenderList.length === 0) {
      if (checkedTypeList.length === 0) {
        setProductsCopy(products)
      } else {
        const filterOnlyByType = products.filter((product: ProductType) => {
          return [...checkedTypeList].includes(product.type.toLowerCase())
        })

        setProductsCopy(filterOnlyByType)
      }
      return
    }

    if (checkedTypeList.length === 0) {
      filteredByGender = products.filter((product: ProductType) => {
        return updatedGenderList.includes(product.gender.toLowerCase())
      })
      setProductsCopy(filteredByGender)
    } else {
      filteredByGender = products.filter((product: ProductType) => {
        return (
          checkedTypeList.includes(product.type.toLowerCase()) &&
          updatedGenderList.includes(product.gender.toLowerCase())
        )
      })
      setProductsCopy(filteredByGender)
    }
  }

  return (
    <main className='w-full flex items-start justify-between gap-20 px-10 py-16'>
      <header className='fixed top-3'>
        <Link href='/' className='text-2xl font-medium text-eerieBlack'>
          Anon
        </Link>
      </header>
      <div className='flex flex-col gap-3'>
        <h2 className='whitespace-nowrap text-lg font-medium text-eerieBlack'>
          Filter by Type
        </h2>
        <div className='flex flex-col gap-1.5'>
          {itemFilterData.map((item, idx: number) => {
            return (
              <div key={idx} className='relative flex gap-10 w-[18px] h-[18px]'>
                <div>
                  <input
                    type='checkbox'
                    className='h-full w-full filter-checkbox'
                    value={item.title}
                    onChange={filterProductsByType}
                  />
                  <span className='checked-span'></span>
                </div>
                <span className='z-[100] min-w-[110px] whitespace-nowrap'>
                  {item.title}
                </span>
              </div>
            )
          })}
          <div className='flex flex-col mt-8'>
            <h2 className='text-lg text-eerieBlack whitespace-nowrap font-medium mb-5'>
              Select Gender
            </h2>
            {FilterGenderData.map((gender: { title: string }, idx: number) => {
              return (
                <div
                  key={idx}
                  className='relative flex gap-10 w-[18px] h-
              [18px]'
                >
                  <div>
                    <input
                      type='checkbox'
                      className='h-full w-full filter-checkbox'
                      onChange={filterProductsByGender}
                      value={gender.title}
                    />
                    <span className='checked-span !w-[18px] !h-[18px]'></span>
                  </div>
                  <span className='z-[100] min-w-[110px] whitespace-nowrap'>
                    {gender.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='flex items-start w-full justify-center gap-5 flex-wrap'>
        {notProductFound && (
          <h2 className='text-xl text-sonicSilver'>Couldn't find product.</h2>
        )}
        {productsCopy &&
          productsCopy.map((product: ProductType) => {
            const inWatchList =
              watchList &&
              watchList.find((liked: ProductType) => {
                return liked.id === product.id
              })
            return (
              <div
                key={product.id}
                className='bg-white overflow-hidden border rounded-[8px] relative p-8 w-[300px] h-[330px] group flex flex-col justify-end items-start'
              >
                <div className='p-3 flex justify-center w-full h-[140px] absolute top-2 right-[10px] opacity-100 transition-all duration-300 group-hover:opacity-0'>
                  <img
                    className='w-[200px] h-full object-contain'
                    src={product.image[0]}
                    alt={`product image/${product.id}`}
                  />
                </div>
                <div className='p-3 flex justify-center w-full h-[140px] absolute top-2 right-[10px] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                  <img
                    className='w-[200px] h-full object-contain'
                    src={product.image[1]}
                    alt={`product image/${product.id}`}
                  />
                </div>
                <div className='flex flex-col items-start gap-2'>
                  <span className='uppercase text-salmonPink text-sm font-medium'>
                    {product.type}
                  </span>
                  <h2 className='text-sonicSilver text-[15px]'>
                    {product.title}
                  </h2>
                  <div className='flex items-center'>
                    {product.rating.length !== 0 ? (
                      starsArr.map((star: any) => {
                        return (
                          <svg
                            key={star}
                            xmlns='http://www.w3.org/2000/svg'
                            fill={
                              Number(getRating(product.rating)) &&
                              star <= getRating(product.rating)
                                ? 'black'
                                : 'none'
                            }
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-[21px] h-[21px]'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                            />
                          </svg>
                        )
                      })
                    ) : (
                      <span className='text-eerieBlack text-[15px]'>
                        Not Rated
                      </span>
                    )}
                  </div>
                  <div className='flex items-center font-semibold'>
                    <LuDollarSign />
                    <span>{product.price}</span>
                  </div>
                </div>
                <div className='absolute group-hover:translate-x-0 transition-all duration-300 top-3 right-3 flex flex-col items-center gap-2 translate-x-[50px]'>
                  <div
                    onClick={() => dispatch(addToWatchList(product))}
                    className='icon-style border rounded p-1'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill={inWatchList ? 'hsl(0, 0%, 47%)' : 'none'}
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='hsl(0, 0%, 47%)'
                      className='w-[21px] h-[21px]'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                      />
                    </svg>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className='icon-style border p-1 rounded'
                  >
                    <IoEyeOutline className='text-xl text-sonicSilver' />
                  </Link>
                  <div className='icon-style p-1 border rounded'>
                    <IoGitCompareOutline className='text-xl text-sonicSilver' />
                  </div>
                  <div
                    onClick={() => dispatch(addItemToCart(product as any))}
                    className='icon-style p-1 border rounded'
                  >
                    <IoBagAddOutline className='text-xl text-sonicSilver' />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Toaster />
    </main>
  )
}

export default ProductsPage
