'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import { useSelector } from 'react-redux'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

const BecomeVendor = () => {
  const [vendorKey, setVendorKey] = useState<string>('')
  const { user } = useSelector((state: any) => state.user)

  useEffect(() => {
    if (user.role === 'vendor') {
      window.location.href = '/'
    }
  }, [user])

  const becomeVendor = async () => {
    try {
      if (vendorKey.length === 0) {
        return toast.error('Key must be provided.')
      } else if (vendorKey !== 'lashas_vendor_key') {
        return toast.error('Incorrect Key.')
      }
      await axios.post('/user/become-vendor', { vendorKey })
      window.location.href = '/'
      setTimeout(() => {
        window.location.reload()
      }, 300)
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
      <Toaster />
    </main>
  )
}

export default BecomeVendor
