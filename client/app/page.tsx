'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'
import Link from 'next/link'
import Products from './components/Products'
import FooterNav from './components/FooterNav'
import ShoppingCart from './components/ShoppingCart'
import { useSelector } from 'react-redux'

const Home = () => {
  const { cartOpen } = useSelector((state: any) => state.tabs)

  const checkTabOpened = () => {
    if (cartOpen) {
      return true
    } else {
      return false
    }
  }

  return (
    <main className='py-2.5 relative max-lg:pb-20'>
      {checkTabOpened() && (
        <div className='fixed z-[10] w-full h-full bg-spanishGray top-0 right-0 opacity-60' />
      )}
      <Header />
      <Swiper />
      <ProductsSlider />
      <div className='flex items-start justify-center'>
        <Category />

        <Products />
      </div>
      <Link href='/add-product'>Add product</Link>
      <FooterNav />
      <ShoppingCart />
    </main>
  )
}

export default Home
