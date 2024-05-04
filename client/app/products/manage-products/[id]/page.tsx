'use client'

import { useSelector } from 'react-redux'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'
import { FiDollarSign } from 'react-icons/fi'

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

const UpdateSingleProduct = ({ params }: { params: { id: string } }) => {
  const [newTitle, setNewTitle] = useState<string>('')
  const [newDesc, setNewDesc] = useState<string>('')
  const [discountedPrice, setDiscountedPrice] = useState<number | string>('')
  const { products }: { products: productType[] } = useSelector(
    (state: any) => state.product
  )

  const updateByIdProduct =
    products.length > 0 &&
    products.find((product: productType) => {
      return product.id === parseInt(params.id)
    })

  const buttonDisabled = () => {
    if (updateByIdProduct) {
      if (
        updateByIdProduct.title !== newTitle ||
        updateByIdProduct.description !== newDesc ||
        Number(updateByIdProduct.price) !== Number(discountedPrice)
      ) {
        return false
      } else {
        return true
      }
    }
  }

  useEffect(() => {
    if (updateByIdProduct) {
      setNewTitle(updateByIdProduct.title)
      setNewDesc(updateByIdProduct.description)
      setDiscountedPrice(updateByIdProduct.price)
    }
  }, [updateByIdProduct])

  return (
    <main className='w-full p-10'>
      <div className='w-full flex justify-center'>
        {updateByIdProduct ? (
          <div className='flex flex-col items-center gap-2'>
            <div className='w-[250px] h-[350px]'>
              <img
                src={updateByIdProduct.image[0]}
                className='w-full h-full object-contain'
                alt='Updating Product Image'
              />
            </div>
            <div className='flex flex-col items-center'>
              <form>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col items-start gap-1'>
                    <label
                      htmlFor='title'
                      className='font-medium cursor-pointer'
                    >
                      Title
                    </label>
                    <input
                      value={newTitle}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewTitle(e.target.value)
                      }
                      type='text'
                      id='title'
                      className='border px-4 py-1 rounded w-[300px]'
                      placeholder='New Product Title'
                    />
                  </div>
                  <div className='flex flex-col items-start gap-1'>
                    <label
                      htmlFor='desc'
                      className='font-medium cursor-pointer'
                    >
                      Description
                    </label>
                    <textarea
                      value={newDesc}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setNewDesc(e.target.value)
                      }
                      id='desc'
                      className='border px-4 py-1 rounded h-[90px] w-[300px] resize-none'
                      placeholder='New Product Description'
                    />
                  </div>
                  <div>
                    <div className='flex flex-col items-start gap-1'>
                      <label
                        htmlFor='price'
                        className='font-medium cursor-pointer'
                      >
                        Discount Price
                      </label>

                      <div className='flex items-center gap-2'>
                        <span>Current price: </span>
                        <div className='flex items-center font-medium'>
                          <FiDollarSign />
                          {updateByIdProduct.price}
                        </div>
                      </div>
                      <input
                        value={discountedPrice}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setDiscountedPrice(e.target.value)
                        }
                        type='number'
                        id='price'
                        className='border px-4 py-1 rounded w-[300px]'
                        placeholder='Discount price'
                      />
                    </div>
                  </div>
                </div>
              </form>
              <button
                disabled={buttonDisabled()}
                className='mt-3 px-5 py-1 bg-oceanGreen transition-all duration-300 ease-linear disabled:opacity-40 text-white rounded'
              >
                Confirm Edit
              </button>
            </div>
          </div>
        ) : (
          <Skeleton className='w-[500px] h-[400px] bg-slate-600' />
        )}
      </div>
    </main>
  )
}

export default UpdateSingleProduct
