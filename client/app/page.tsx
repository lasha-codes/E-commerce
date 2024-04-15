'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'
import Link from 'next/link'
import Products from './components/Products'
import FooterNav from './components/FooterNav'
import ShoppingCart from './components/ShoppingCart'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { closeCart, closeSidebar } from './lib/features/tabs/tabsSlice'
import SideBar from './components/SideBar'

const Home = () => {
  const dispatch = useDispatch()
  const { cartOpen, sideBarOpen }: { cartOpen: boolean; sideBarOpen: boolean } =
    useSelector((state: any) => state.tabs)

  const checkTabOpened = () => {
    if (cartOpen || sideBarOpen) {
      return true
    } else {
      return false
    }
  }

  const handleCloseTab = () => {
    dispatch(closeCart())
    dispatch(closeSidebar())
  }

  useEffect(() => {
    window.addEventListener('click', handleCloseTab)

    return () => {
      window.removeEventListener('click', handleCloseTab)
    }
  }, [])

  return (
    <main className='py-2.5 relative max-lg:pb-20'>
      <div
        className={`fixed z-[10] w-full transition-all h-full bg-spanishGray top-0 right-0 ${
          checkTabOpened()
            ? 'opacity-70 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      <Header />
      <Swiper />
      <ProductsSlider />
      <div className='flex items-start justify-center'>
        <div className='max-lg:hidden'>
          <Category extraClass={''} closeIcon={false} />
        </div>

        <Products />
      </div>
      <Link href='/add-product'>Add product</Link>
      <FooterNav />
      <ShoppingCart />
      <SideBar />
    </main>
  )
}

export default Home
