'use client'

import { useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

const BecomeAdmin = () => {
  const [adminKey, setAdminKey] = useState<string>('')

  const becomeAdmin = async () => {
    try {
      const response = await axios.post('/user/become-admin')
      console.log(response)
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
    </main>
  )
}

export default BecomeAdmin
