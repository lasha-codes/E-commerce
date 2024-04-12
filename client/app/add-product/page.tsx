'use client'
import AddProduct from '../components/AddProduct'
import { Provider } from 'react-redux'
import store from '../lib/store'

const Products = () => {
  return (
    <Provider store={store}>
      <AddProduct />
    </Provider>
  )
}

export default Products
