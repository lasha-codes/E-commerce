'use client'
import AddProduct from '../components/AddProduct'
import { Provider } from 'react-redux'
import store from '../lib/store'
import { Toaster } from 'sonner'
const Products = () => {
  return (
    <Provider store={store}>
      <AddProduct />
      <Toaster />
    </Provider>
  )
}

export default Products
