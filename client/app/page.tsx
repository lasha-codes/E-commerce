'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'
import Link from 'next/link'
import Products from './components/Products'
import FooterNav from './components/FooterNav'
import ShoppingCart from './components/ShoppingCart'

const Home = () => {
  return (
    <main className='py-2.5 relative max-lg:pb-20'>
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
