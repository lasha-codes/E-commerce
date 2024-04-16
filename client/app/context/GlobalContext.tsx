'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsFromDB } from '../lib/features/products/productSlice'
import { renderCart } from '../lib/features/tabs/tabsSlice'

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch()
  useEffect(() => {
    dispatch(getProductsFromDB())
    dispatch(renderCart())
  }, [])

  return <>{children}</>
}

export default GlobalContext
