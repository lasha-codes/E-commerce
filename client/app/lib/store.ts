import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'
import tabsSlice from './features/tabs/tabsSlice'

const store = configureStore({
  reducer: {
    product: productSlice,
    tabs: tabsSlice,
  },
})

export default store
