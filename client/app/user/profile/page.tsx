'use client'

import { useSelector } from 'react-redux'
import defaultAvatar from '../../assets/default-avatar.jpg'
import Image from 'next/image'

const Profile = () => {
  const { user } = useSelector((state: any) => state.user)

  const returnUserImage = () => {
    if (user.picture) {
      return user.picture
    } else {
      return defaultAvatar
    }
  }

  return (
    <main className='w-full p-12 flex justify-center'>
      <div className='flex flex-col justify-center'>
        <p>{user.username}</p>
        <Image
          src={defaultAvatar}
          priority
          className='h-[500px] w-[500px]'
          alt=''
        />
      </div>
    </main>
  )
}

export default Profile
