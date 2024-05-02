'use client'

import { useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

const BecomeVendor = () => {
  const [vendorKey, setVendorKey] = useState<string>('')

  const becomeVendor = async () => {
    try {
      const response = await axios.post('/user/become-vendor', { vendorKey })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main className='w-full h-screen bg-eerieBlack flex items-center justify-center'>
      <div className='flex gap-3 flex-col justify-center items-center'>
        <input
          value={vendorKey}
          onChange={(e) => setVendorKey(e.target.value)}
          type='text'
          placeholder='vendor_secret_key'
          className='outline-none rounded px-3 py-1 w-[300px]'
        />
        <button
          onClick={becomeVendor}
          className='bg-white text-eerieBlack hover:bg-cultured transition-all duration-300 px-3 py-0.5 rounded'
        >
          Submit
        </button>
      </div>
    </main>
  )
}

export default BecomeVendor
