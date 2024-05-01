'use client'

import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Toaster } from 'sonner'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

const BecomeAdmin = () => {
  const [adminKey, setAdminKey] = useState<string>('')

  const becomeAdmin = async () => {
    try {
      if (adminKey.length === 0) {
        return toast.error('Key must be provided.')
      }
      const response = await axios.post('/user/become-admin')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='bg-eerieBlack w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4 items-center'>
        <input
          value={adminKey}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAdminKey(e.target.value)
          }
          className='w-[300px] bg-white outline-none rounded px-3 py-1'
          placeholder='admin-secret-key'
        />
        <button
          onClick={becomeAdmin}
          className='bg-white text-eerieBlack w-fit px-3 py-0.5 rounded hover:bg-cultured hover:text-black transition-all duration-300m ease'
        >
          Submit
        </button>
      </div>
      <Toaster />
    </main>
  )
}

export default BecomeAdmin
