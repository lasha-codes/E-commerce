'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsFromDB } from '../lib/features/products/productSlice'
import { renderCart, renderWatchList } from '../lib/features/tabs/tabsSlice'
import axios from 'axios'

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch()
  useEffect(() => {
    dispatch(getProductsFromDB())
    dispatch(renderCart())
    dispatch(renderWatchList())
    axios
      .get('/user/authenticate', { withCredentials: true })
      .then((response) => {
        console.log(response.data)
      })
  }, [])

  return <>{children}</>
}

export default GlobalContext
