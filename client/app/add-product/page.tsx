import { FaCirclePlus } from 'react-icons/fa6'

const AddProduct = () => {
  return (
    <main className='w-full flex flex-col justify-center items-center gap-10'>
      <header className='w-full border-b px-5 py-3'>
        <div className='flex items-center gap-3'>
          <h1 className='text-2xl font-medium'>Anon</h1>
          <div className='h-[22px] w-[1px] bg-spanishGray' />
          <h3 className='text-sonicSilver'>Add Product</h3>
        </div>
      </header>
      <div className='flex flex-col gap-10 md:w-[600px] max-md:w-[80%] max-sm:w-[85%]'>
        <h1 className='text-3xl font-medium'>Product Information</h1>
        <form>
          <div className='border rounded-xl p-2'>
            <div className='p-9 w-fit rounded-xl bg-cultured border border-dashed cursor-pointer'>
              <FaCirclePlus className='text-3xl' />
            </div>
          </div>
          <div className='flex flex-col gap-4 mt-5 border-b pb-5'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name' className='text-eerieBlack text-[15.5px]'>
                Name
              </label>
              <input
                required
                type='text'
                id='name'
                className='border rounded px-4 py-0.5 placeholder:text-sm placeholder:opacity-60 placeholder:font-light cursor-pointer'
                placeholder='Name'
              />
            </div>
            <div className='w-full'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='desc' className='text-eerieBlack text-[15.5px]'>
                  Description
                </label>
                <textarea
                  required
                  className='border rounded w-full pt-4 px-4 placeholder:text-sm placeholder:opacity-60 resize-none placeholder:font-light cursor-pointer'
                  placeholder='Enter product description.'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h2 className='text-xl mb-5 text-salmonPink'>Additional info</h2>
            <div>
              <div className='flex flex-col gap-1'>
                <label htmlFor='price'>Product price</label>
                <input
                  type='number'
                  id='price'
                  className='border rounded py-0.5 px-4 placeholder:text-sm placeholder:opacity-60 resize-none placeholder:font-light cursor-pointer'
                  placeholder='0$'
                />
              </div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default AddProduct
