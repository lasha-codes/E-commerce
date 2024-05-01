'use client'

import { useSelector } from 'react-redux'
import defaultAvatar from '../../assets/default-avatar.jpg'
import Image from 'next/image'
import { SlArrowLeft } from 'react-icons/sl'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'sonner'
import { Toaster } from 'sonner'

const Profile = () => {
  const { user, isLoaded } = useSelector((state: any) => state.user)
  const returnUserImage = () => {
    if (user.picture) {
      return user.picture
    } else {
      return defaultAvatar
    }
  }

  const logout = async () => {
    try {
      await axios.post('/user/logout', {}, { withCredentials: true })
      window.location.href = '/user/login'
    } catch (err) {
      toast.error('Something went wrong.')
    }
  }

  const returnButtons = () => {
    if (user.role === 'vendor') {
      return (
        <div className='flex items-center gap-3'>
          <button className='px-3 border py-0.5 border-eerieBlack icon-style hover:bg-eerieBlack hover:text-white transition-all duration-300'>
            Quit Vendor
          </button>
          <button className='px-3 py-0.5 border border-eerieBlack bg-eerieBlack text-white hover:bg-white hover:text-eerieBlack transition-all duration-300 icon-style'>
            Become Admin
          </button>
        </div>
      )
    } else if (user.role === 'admin') {
      return (
        <div className='flex items-center gap-3'>
          <button className='px-3 border py-0.5 border-eerieBlack icon-style hover:bg-eerieBlack hover:text-white transition-all duration-300'>
            Quit Admin
          </button>
          <button className='px-3 py-0.5 border border-eerieBlack bg-eerieBlack text-white hover:bg-white hover:text-eerieBlack transition-all duration-300 icon-style'>
            Become Vendor
          </button>
        </div>
      )
    } else {
      return (
        <div className='flex items-center gap-3'>
          <button className='px-3 border py-0.5 border-eerieBlack icon-style hover:bg-eerieBlack hover:text-white transition-all duration-300'>
            Become Vendor
          </button>
          <button className='px-3 py-0.5 border border-eerieBlack bg-eerieBlack text-white hover:bg-white hover:text-eerieBlack transition-all duration-300 icon-style'>
            Become Admin
          </button>
        </div>
      )
    }
  }

  if (!user.email && isLoaded) {
    return <div>No access.</div>
  }

  return (
    <main className='w-full p-12 flex justify-center relative'>
      <div className='flex flex-col items-center gap-5'>
        <div className='h-[100px] w-[100px] rounded-full overflow-hidden'>
          <Image
            src={returnUserImage()}
            priority
            className='h-full w-full'
            alt=''
          />
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <h2 className='text-2xl font-semibold text-center text-eerieBlack'>
            {user.username}
          </h2>
          <p className='text-lg text-spanishGray'>{user.email}</p>
          <p className='flex items-center gap-1'>
            <span className='text-eerieBlack'>role:</span>
            <span className='text-eerieBlack font-medium'>{user.role}</span>
          </p>
        </div>
        <button
          onClick={logout}
          className='bg-salmonPink text-white px-6 py-1 hover:opacity-80 transition-all duration-300'
        >
          Logout
        </button>
        <>{user.role && returnButtons()}</>
      </div>
      <Link
        href='/'
        className='bg-cultured absolute top-5 left-5 flex items-center justify-center icon-style p-1.5 rounded-full'
      >
        <SlArrowLeft className='text-[18.5px]' />
      </Link>
      <Toaster />
    </main>
  )
}

export default Profile
