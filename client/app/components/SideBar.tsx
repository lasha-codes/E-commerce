import Category from './Category'

const SideBar = () => {
  return (
    <div className='fixed top-0 h-screen left-0 w-[500px] bg-white'>
      <Category extraClass={'border-none w-full'} />
    </div>
  )
}

export default SideBar
