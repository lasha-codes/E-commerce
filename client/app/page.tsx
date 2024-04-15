'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'
import Link from 'next/link'
import Products from './components/Products'
import FooterNav from './components/FooterNav'

const Home = () => {
  return (
    <main className='py-2.5 relative'>
      <Header />
      <Swiper />
      <ProductsSlider />
      <div className='flex items-start'>
        <Category />
        <Products />
      </div>
      <Link href='/add-product'>Add product</Link>
      <FooterNav />
    </main>
  )
}

export default Home
