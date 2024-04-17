import Link from 'next/link'
import { GiMoebiusStar } from 'react-icons/gi'

const Login = () => {
  return (
    <main className='w-full h-screen max-md:flex-col-reverse overflow-y-scroll flex justify-between items-center'>
      <div className='bg-white flex flex-col items-center h-full w-full px-5 py-20'>
        <div className='flex items-center flex-col gap-8'>
          <div className='bg-eerieBlack rounded-full p-2 w-fit'>
            <GiMoebiusStar className='text-white text-5xl' />
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-4xl font-semibold'>Welcome back!</h1>
            <p className='text-[16px] flex items-center gap-2'>
              Don't have account yet?
              <Link
                href={'/user/register'}
                className='border-eerieBlack border-b pb-0.5 font-semibold'
              >
                Register
              </Link>
            </p>
          </div>
        </div>
        <form className='mt-10'>
          <div className='flex flex-col items-center gap-6'>
            <div className='flex flex-col items-start gap-2'>
              <label
                htmlFor='email'
                className='font-semibold text-eerieBlack cursor-pointer'
              >
                Email
              </label>
              <input
                type='text'
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
            <span className='font-semibold border-b border-eerieBlack text-eerieBlack hover:opacity-90 transition-all cursor-pointer'>
              Forgot password?
            </span>
          </div>
        </form>
      </div>
      <div className='h-full w-full'>
        <img
          src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmRsdGVzeWFsbHNjM284aGlwdWozZjRpdnI4dnhrZHJsM3czZHhmZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f6qMGmXuOdkwU/giphy.gif'
          className='h-full w-full object-cover'
          alt='login/register side banner'
        />
      </div>
    </main>
  )
}

export default Login
