'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsFromDB } from '../lib/features/products/productSlice'
import { renderCart, renderWatchList } from '../lib/features/tabs/tabsSlice'
import axios from 'axios'
import { getUser } from '../lib/features/user/userSlice'

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch()
  useEffect(() => {
    dispatch(getProductsFromDB())
    dispatch(renderCart())
    dispatch(renderWatchList())
    axios
      .get('/user/authenticate', { withCredentials: true })
      .then((response) => {
        dispatch(getUser(response.data))
      })
  }, [])

  return <>{children}</>
}

export default GlobalContext
