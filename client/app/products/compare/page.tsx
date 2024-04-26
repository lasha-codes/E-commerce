import Link from 'next/link'

const ProductCompare = () => {
  return (
    <main className='w-full py-5'>
      <header className='px-8'>
        <div className='flex items-center gap-3'>
          <Link href='/' className='text-eerieBlack font-medium text-2xl'>
            Anon
          </Link>
          <div className='h-[22px] w-[2px] bg-spanishGray' />
          <span className='text-sonicSilver opacity-85 text-[15px]'>
            Compare Products
          </span>
        </div>
      </header>
      <div></div>
    </main>
  )
}

export default ProductCompare
