import Link from 'next/link'
import { socialLinks } from '../data/data'
import { CiSearch, CiUser } from 'react-icons/ci'
import { IoIosHeartEmpty } from 'react-icons/io'
import { BsHandbag } from 'react-icons/bs'

const Header = () => {
  return (
    <header className='flex flex-col gap-2'>
      <div className='flex items-center justify-between border-b px-8 pb-2.5 max-xsm:justify-center'>
        <nav className='flex items-center gap-2'>
          {socialLinks.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              target='_blank'
              className='bg-cultured p-1 rounded hover:scale-105 active:scale-90 transition-all'
            >
              <link.icon className='text-sonicSilver' />
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-1 text-[12px] max-xsm:hidden'>
          <span className='font-medium text-sonicSilver'>FREE SHIPPING</span>
          <span>-</span>
          <p className='text-spanishGray'>THIS WEEK ORDER OVER $55</p>
        </div>
        <div className='max-sm:hidden'></div>
      </div>
      <div className='flex items-center px-12 justify-between border-b pt-3 pb-5 max-xsm:flex-col max-xsm:gap-2'>
        <Link href='/'>
          <h1 className='text-[26px] font-bold'>Anon</h1>
        </Link>
        <div className='w-[60%] max-sm:w-[80%] py-2 flex justify-start items-center px-5 border focus-within:border-sonicSilver rounded-lg'>
          <input
            id='search-inp'
            placeholder='Enter your product name...'
            className='w-full h-full outline-none text-[16px]'
          />
          <label htmlFor='search-inp' className='cursor-pointer'>
            <CiSearch className='text-[20px] text-sonicSilver' />
          </label>
        </div>
        <div className='flex items-center gap-4 max-sm:hidden'>
          <div>
            <CiUser className='text-3xl cursor-pointer icon-style' />
          </div>
          <div className='relative'>
            <IoIosHeartEmpty className='text-[27px] icon-style' />
            <div className='bg-salmonPink absolute text-cultured w-[15px] h-[15px] text-[12px] flex items-center justify-center rounded-full -top-[1px] -right-1'>
              0
            </div>
          </div>
          <div className='relative'>
            <BsHandbag className='text-[24px] icon-style' />
            <div className='bg-salmonPink absolute text-cultured w-[15px] h-[15px] text-[12px] flex items-center justify-center rounded-full -top-[1px] -right-1'>
              0
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
