import Link from 'next/link'

const Articles = () => {
  return (
    <main className='py-5 px-10 relative'>
      <header className='flex items-center gap-2 absolute top-4 left-5'>
        <Link href='/' className='text-2xl text-eerieBlack font-medium'>
          Anon
        </Link>
        <div className='w-[2px] h-[22px] bg-sonicSilver' />
        <span className='text-[15px] text-sonicSilver'>Articles</span>
      </header>
    </main>
  )
}

export default Articles
