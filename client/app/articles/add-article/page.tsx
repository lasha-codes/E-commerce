import Link from 'next/link'
import axios from 'axios'

const AddArticle = () => {
  return (
    <main className='py-5'>
      <header className='flex items-center gap-3 px-10 border-b pb-4'>
        <Link href='/' className='text-eerieBlack text-2xl font-medium'>
          Anon
        </Link>
        <div className='h-[22px] w-[1px] bg-sonicSilver' />
        <span className='text-[16px] text-spanishGray'>Add Article</span>
      </header>
      <section className='w-full flex justify-center mt-20'>
        <div className='w-[700px]'>
          <h1 className='text-left w-full text-3xl text-eerieBlack font-medium'>
            Write Your Article
          </h1>
        </div>
      </section>
    </main>
  )
}

export default AddArticle
