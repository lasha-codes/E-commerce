import { GiMoebiusStar } from 'react-icons/gi'

const Login = () => {
  return (
    <main className='w-full h-screen flex justify-between items-center'>
      <div className='bg-white flex flex-col items-center h-full w-full px-5 py-20'>
        <div className='flex items-center flex-col gap-8'>
          <div className='bg-eerieBlack rounded-full p-2 w-fit'>
            <GiMoebiusStar className='text-white text-5xl' />
          </div>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-4xl font-semibold'>Welcome back!</h1>
            <p className='text-[16px] flex items-center gap-2'>
              Don't have account yet?
              <span className='border-eerieBlack border-b pb-0.5 font-semibold'>
                Register
              </span>
            </p>
          </div>
        </div>
        <form className='mt-10'>
          <div className='flex flex-col items-start gap-1'>
            <label htmlFor='email' className='font-medium text-eerieBlack'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='rounded-full bg-cultured min-h-[30px] py-2 px-10 placeholder:opacity-40'
              placeholder='E.g. yourname@gmail.com'
            />
          </div>
          <div></div>
        </form>
      </div>
      <div className='h-full w-full bg-sonicSilver'></div>
    </main>
  )
}

export default Login
