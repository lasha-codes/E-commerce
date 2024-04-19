'use client'

import Link from 'next/link'
import { GiMoebiusStar } from 'react-icons/gi'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const Login = () => {
  const router = useRouter()
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const { user } = useSelector((state: { user: any }) => state.user)

  useEffect(() => {
    if (user.email) {
      router.push('/')
    }
  }, [user])

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (!email || !password) {
        return toast.error('Both fields are required')
      } else if (email.length < 8) {
        return toast.error('email must be at least 8 characters long')
      } else if (password.length < 6) {
        return toast.error('password must be at least 6 characters long')
      }
      const response = await axios.post(
        '/user/login',
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      if (response.status < 400) {
        router.push('/')
        setTimeout(() => {
          window.location.reload()
        }, 300)
      }
      setPassword('')
      setEmail('')
    } catch (err: any) {
      toast.error('Wrong credentials')
    }
  }

  return (
    <main className='w-full h-screen max-md:flex-col-reverse max-md:overflow-y-scroll flex justify-between items-center'>
      <div className='bg-white flex flex-col items-center h-full w-full px-5 py-20'>
        <div className='flex items-center flex-col gap-8'>
          <div className='bg-eerieBlack rounded-full p-2 w-fit'>
            <GiMoebiusStar className='text-white text-5xl' />
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-4xl font-semibold'>Welcome back!</h1>
            <p className='text-[16px] flex items-center gap-2 text-sonicSilver'>
              Don't have account yet?
              <Link
                href={'/user/register'}
                className='border-eerieBlack border-b text-eerieBlack pb-0.5 font-semibold'
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={login} className='mt-10'>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-start gap-2'>
              <label
                htmlFor='email'
                className='font-semibold text-eerieBlack cursor-pointer'
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                type='email'
                id='email'
                className='rounded-full bg-cultured min-h-[30px] py-2 px-10 placeholder:opacity-40'
                placeholder='E.g. yourname@gmail.com'
              />
            </div>
            <div className='flex flex-col items-start gap-2'>
              <label
                htmlFor='password'
                className='font-semibold text-eerieBlack cursor-pointer'
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                type='password'
                id='password'
                className='rounded-full bg-cultured min-h-[30px] py-2 px-10 placeholder:opacity-40'
                placeholder='Enter your password'
              />
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <button className='w-full text-white bg-eerieBlack mt-12 py-2.5 hover:opacity-90 transition-all duration-300 rounded-full'>
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className='h-full w-full'>
        <img
          src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGQyNTlpM2M5dXpia2h6ZHhrdXRkeXhlNmNhNXQ3OW11NGtraHlqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv1GbekAakxXO8g/giphy.gif'
          className='h-full w-full object-cover'
          alt='login/register side banner'
        />
      </div>
      <Toaster />
    </main>
  )
}

export default Login
