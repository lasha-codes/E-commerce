import { useSelector, useDispatch } from 'react-redux'
import { BsCurrencyDollar } from 'react-icons/bs'
import { VendorNavigation, navigation, socialLinks } from '../data/data'
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { closeSidebar } from '../lib/features/tabs/tabsSlice'

const SideBar = () => {
  const dispatch = useDispatch()
  const { products }: { products: [productType] } = useSelector(
    (state: any) => state.product
  )
  const { sideBarOpen }: { sideBarOpen: boolean } = useSelector(
    (state: any) => state.tabs
  )
  const { user } = useSelector((state: any) => state.user)

  interface productType {
    id: number
    title: string
    price: number
    discountedPrice: null | number
    image: string[]
    type: string
    description: string
    sold: number
  }

  const returnNavigation = () => {
    if (user.role === 'user') {
      return (
        <nav
          className='flex flex-col items-start gap-4 w-full 
        justify-center py-3 max-md:hidden text-sonicSilver'
        >
          {navigation.map((link: any, idx: number) => {
            return (
              <Link
                href={link.href}
                key={idx}
                className='font-medium icon-style text-lg text-sonicSilver'
              >
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else if (user.role === 'admin') {
      return (
        <nav
          className='flex flex-col items-start gap-4 w-full 
        justify-center py-3 max-md:hidden'
        >
          {navigation.map((link: any, idx: number) => {
            return (
              <Link
                href={link.href}
                key={idx}
                className='font-medium icon-style text-lg text-sonicSilver'
              >
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else if (!user.role) {
      return (
        <nav
          className='flex flex-col items-start gap-4 w-full 
        justify-center py-3 max-md:hidden'
        >
          {navigation.map((link: any, idx: number) => {
            return (
              <Link
                href={link.href}
                key={idx}
                className='font-medium icon-style text-lg text-sonicSilver'
              >
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    } else {
      return (
        <nav
          className='flex flex-col items-start gap-4 w-full 
        justify-center py-3 max-md:hidden'
        >
          {VendorNavigation.map((link: any, idx: number) => {
            return (
              <Link
                href={link.href}
                key={idx}
                className='font-medium icon-style text-lg text-sonicSilver'
              >
                {link.link}
              </Link>
            )
          })}
        </nav>
      )
    }
  }

  return (
    <main
      onClick={(e) => e.stopPropagation()}
      className={`fixed flex flex-col overflow-y-scroll pb-10 max-xsm:w-full max-md:pb-20 items-center overflow-hidden max-sm:overflow-y-scroll px-10 top-0 h-screen z-[99] left-0 w-[500px] transition-all duration-700 max-md:duration-1000 ease-in-out bg-white ${
        sideBarOpen
          ? 'translate-x-0'
          : 'translate-x-[-500px] max-md:translate-x-[-700px]'
      }`}
    >
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-3 self-start py-5 pb-4'>
          {socialLinks.map((icon: any, idx: number) => {
            return (
              <Link
                key={idx}
                href={icon.href}
                target='_blank'
                className='icon-style bg-cultured rounded-[5px] p-[5px]'
              >
                {<icon.icon className='text-sonicSilver text-lg' />}
              </Link>
            )
          })}
        </div>
        <GoArrowRight
          onClick={() => dispatch(closeSidebar())}
          className='text-[21px] icon-style cursor-pointer'
        />
      </div>
      <nav className='w-full pb-5'>{returnNavigation()}</nav>
      <div className='flex items-start flex-col w-full'>
        <h2 className='text-xl w-full text-left font-semibold text-eerieBlack opacity-95'>
          BEST SELLERS
        </h2>
        <div className='flex items-center flex-wrap gap-10 mt-7'>
          {products &&
            products.slice(0, 4).map((product: productType) => {
              return (
                <div
                  className='flex justify-start items-end gap-8'
                  key={product.id}
                >
                  <div className='min-w-[80px] min-h-[80px] max-w-[80px]'>
                    <img
                      className='w-full h-full object-contain'
                      src={product.image[0]}
                    />
                  </div>
                  <div>
                    <h3 className='text-eerieBlack font-medium'>
                      {product.title}
                    </h3>
                    <span className='text-[13px] text-salmonPink uppercase'>
                      {product.type}
                    </span>
                    <span className='flex items-center font-semibold'>
                      <BsCurrencyDollar />
                      {product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}

export default SideBar
