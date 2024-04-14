'use client'

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsFromDB } from '../lib/features/products/productSlice'

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const dispatch: any = useDispatch()
  useEffect(() => {
    dispatch(getProductsFromDB())
  }, [])

  return <>{children}</>
}

export default GlobalContext
