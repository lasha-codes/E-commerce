import { configureStore } from '@reduxjs/toolkit'
import productSlice from './features/products/productSlice'
import tabsSlice from './features/tabs/tabsSlice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    product: productSlice,
    tabs: tabsSlice,
    user: userSlice,
  },
})

export default store
