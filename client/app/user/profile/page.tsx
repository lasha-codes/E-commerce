'use client'

import { useSelector } from 'react-redux'
import defaultAvatar from '../../assets/default-avatar.jpg'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa6'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'sonner'
import { Toaster } from 'sonner'

const Profile = () => {
  const { user } = useSelector((state: any) => state.user)
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

  if (!user.email) {
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
        </div>
        <button
          onClick={logout}
          className='bg-salmonPink text-white px-10 py-2 rounded-full hover:opacity-80 transition-all duration-300'
        >
          Logout
        </button>
      </div>
      <Link href='/'>
        <FaArrowLeft className='absolute top-5 left-5 text-xl icon-style' />
      </Link>
      <Toaster />
    </main>
  )
}

export default Profile
