'use client'

import { useState } from 'react'

const BecomeAdmin = () => {
  const [adminKey, setAdminKey] = useState<string>('')
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
        <button className='bg-white text-eerieBlack w-fit px-3 py-0.5 rounded hover:bg-cultured hover:text-black transition-all duration-300m ease'>
          Submit
        </button>
      </div>
    </main>
  )
}

export default BecomeAdmin
