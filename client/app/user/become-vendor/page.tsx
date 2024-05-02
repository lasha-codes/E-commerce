const BecomeVendor = () => {
  return (
    <main className='w-full h-screen bg-eerieBlack flex items-center justify-center'>
      <div className='flex gap-3 flex-col justify-center items-center'>
        <input
          type='text'
          placeholder='vendor_secret_key'
          className='outline-none rounded px-3 py-1 w-[300px]'
        />
        <button className='bg-white text-eerieBlack hover:bg-cultured transition-all duration-300 px-3 py-0.5 rounded'>
          Submit
        </button>
      </div>
    </main>
  )
}

export default BecomeVendor
