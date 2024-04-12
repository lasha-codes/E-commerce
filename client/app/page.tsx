'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Category from './components/Category'
import Link from 'next/link'

const Home = () => {
  return (
    <main className='py-2.5'>
      <Header />
      <Swiper />
      <ProductsSlider />
      <Category />
      <Link href='/add-product'>Add product</Link>
    </main>
  )
}

export default Home
