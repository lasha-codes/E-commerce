'use client'

import Swiper from './components/Swiper'
import Header from './components/Header'
import ProductsSlider from './components/ProductsSlider'
import Products from './components/Products'
import FooterNav from './components/FooterNav'
import ShoppingCart from './components/ShoppingCart'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  closeCart,
  closeSidebar,
  closeWatchList,
} from './lib/features/tabs/tabsSlice'
import SideBar from './components/SideBar'
import WatchList from './components/WatchList'
import NewProducts from './components/NewProducts'
import SearchedComponents from './components/SearchedComponents'

interface ProductType {
  id: number
  title: string
  price: number
  image: string[]
  discountedprice: number | null
  count: number
  description: string
  type: string
  gender: string
  rating: number[]
}

const Home = () => {
  const dispatch = useDispatch()
  const {
    cartOpen,
    sideBarOpen,
    watchListOpen,
  }: { cartOpen: boolean; sideBarOpen: boolean; watchListOpen: boolean } =
    useSelector((state: any) => state.tabs)
  const {
    searchVal,
    products,
  }: { searchVal: string; products: ProductType[] } = useSelector(
    (state: any) => state.product
  )

  const checkTabOpened = () => {
    if (cartOpen || sideBarOpen || watchListOpen) {
      return true
    } else {
      return false
    }
  }

  const handleCloseTab = () => {
    dispatch(closeCart())
    dispatch(closeSidebar())
    dispatch(closeWatchList())
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

      {searchVal ? (
        <SearchedComponents
          productsCopy={
            searchVal.length === 0
              ? products
              : products.filter((product: ProductType) => {
                  return product.title
                    .toLowerCase()
                    .includes(searchVal.toLowerCase())
                })
          }
        />
      ) : (
        <div className='flex items-start justify-center'>
          <div className='flex flex-col gap-10'>
            <Products />
            <NewProducts />
          </div>
        </div>
      )}

      <FooterNav />
      <ShoppingCart />
      <WatchList />
      <SideBar />
    </main>
  )
}

export default Home
