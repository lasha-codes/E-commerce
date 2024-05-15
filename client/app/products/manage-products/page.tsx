'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { FiDollarSign } from 'react-icons/fi'
import { GoTrash } from 'react-icons/go'
import { MdOutlineEdit } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import axios from 'axios'

interface productType {
  id: number
  title: string
  price: number
  image: string[]
  discountedPrice: number | null
  count: number
  description: string
  type: string
}

const ManageProducts = () => {
  const [productName, setProductName] = useState<string>('')
  const [toggleDelete, setToggleDelete] = useState<boolean>(false)
  const [confirmValue, setConfirmValue] = useState<string>('')
  const [deleteProductId, setDeleteProductId] = useState<null | number>(null)
  const { products }: { products: productType[] } = useSelector(
    (state: any) => state.product
  )
  const { user } = useSelector((state: any) => state.user)

  useEffect(() => {
    const handleWindowClick = () => {
      setToggleDelete(false)
      setConfirmValue('')
    }

    if (user.email && user.role !== 'admin') {
      window.location.href = '/'
    }

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [user])

  const deleteButtonDisabled = () => {
    if (productName === confirmValue) {
      return false
    } else {
      return true
    }
  }

  const deleteProduct = async () => {
    try {
      await axios.post(
        'https://anon-api.onrender.com/products/delete-product',
        {
          deleteProductId,
        }
      )
      window.location.reload()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='w-full  relative overflow-y-scroll'>
      <div
        className={`absolute w-full h-full bg-gray-500 opacity-0 pointer-events-none z-[30] ${
          toggleDelete && '!opacity-40 !pointer-events-auto'
        }`}
      />
      <header className='absolute top-5 px-10 py-1'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='text-2xl font-medium'>
            Anon
          </Link>
          <div className='h-[20px] w-[2px] bg-spanishGray' />
          <span className='text-sonicSilver text-sm'>Product Management</span>
        </div>
      </header>
      <section className='mt-[100px] p-5'>
        <div className='flex items-center flex-wrap justify-center gap-12'>
          {products &&
            products.map((product: productType) => {
              return (
                <div
                  onClick={(e) => e.stopPropagation()}
                  key={product.id}
                  className='flex items-center relative justify-center rounded h-[150px] w-[350px] gap-5'
                >
                  <div className='h-[100px] w-[180px]'>
                    <img
                      src={product.image[0]}
                      alt='Product Image'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h2 className='text-[15px] text-sonicSilver w-[230px]'>
                      {product.title}
                    </h2>
                    <span className='text-salmonPink uppercase font-medium text-[13.5px]'>
                      {product.type}
                    </span>
                    <div className='flex items-center font-semibold text-eerieBlack'>
                      <FiDollarSign />
                      <span className=''>{product.price}</span>
                    </div>
                  </div>
                  <div className='absolute flex flex-col bottom-7 right-0 items-start gap-2'>
                    <Link href={`/products/manage-products/${product.id}`}>
                      <MdOutlineEdit className='text-sonicSilver text-[19px] icon-style' />
                    </Link>
                    <GoTrash
                      onClick={() => {
                        setProductName(product.title)
                        setToggleDelete(true)
                        setDeleteProductId(product.id)
                      }}
                      className='text-red-500 text-lg icon-style'
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </section>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border h-[370px] w-[450px] bg-white z-[50] flex flex-col items-center p-4 transition-all duration-500 ease-in-out ${
          toggleDelete
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-10'
        }`}
      >
        <h2 className='flex flex-wrap justify-center relative gap-2 w-full'>
          <IoIosClose
            onClick={() => {
              setToggleDelete(false)
              setConfirmValue('')
            }}
            className='absolute -top-1 -right-1 text-2xl icon-style cursor-pointer text-red-500 hover:text-red-600 transition-all duration-300 ease-out'
          />
          <div className='flex flex-col items-start gap-2 w-[300px]'>
            <span className='min-w-[300px]'>Please confirm product name</span>
            <span className='font-medium'>{`"${productName}"`}</span>
          </div>
        </h2>
        <div className='w-full flex gap-4 flex-col items-center justify-center mt-16'>
          <input
            value={confirmValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmValue(e.target.value)
            }
            type='text'
            className='border rounded px-3 py-1'
            placeholder={`${productName}`}
          />
          <button
            onClick={deleteProduct}
            disabled={deleteButtonDisabled()}
            className='px-3 py-1 rounded bg-red-600 text-white hover:bg-bitterSweet transition-all duration-500 ease-in-out disabled:opacity-25'
          >
            DELETE
          </button>
        </div>
      </div>
    </main>
  )
}

export default ManageProducts
