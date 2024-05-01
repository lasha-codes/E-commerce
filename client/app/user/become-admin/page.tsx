'use client'

import { useState } from 'react'

const BecomeAdmin = () => {
  const [adminKey, setAdminKey] = useState<string>('')
  return (
    <main className='bg-eerieBlack w-full h-screen flex justify-center items-center'>
      <input
        value={adminKey}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAdminKey(e.target.value)
        }
        className='w-[300px] bg-white outline-none px-3 py-1'
        placeholder='admin-secret-key'
      />
    </main>
  )
}

export default BecomeAdmin
