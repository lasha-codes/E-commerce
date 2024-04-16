import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartProducts:
    typeof window !== 'undefined' && localStorage.getItem('cartProducts')
      ? JSON.parse(localStorage.getItem('cartProducts')!)
      : [],
  cartOpen: false,
  sideBarOpen: false,
}

interface ProductType {
  id: number
  sold: number
  price: number
  image: string[]
  discountedPrice: null | number
  title: string
  description: string
}

const tabsSlice = createSlice({
  initialState,
  name: 'tabs',
  reducers: {
    openCart: (state) => {
      state.cartOpen = true
      state.sideBarOpen = false
    },
    closeCart: (state) => {
      state.cartOpen = false
    },
    openSideBar: (state) => {
      state.sideBarOpen = true
      state.cartOpen = false
    },
    closeSidebar: (state) => {
      state.sideBarOpen = false
    },
    addItemToCart: (state: any, { payload }: { payload: ProductType }) => {
      console.log({ ...payload, count: 1 })
      const productInCart = state.cartProducts.find((product: ProductType) => {
        return product.id === payload.id
      })
      if (productInCart) {
        productInCart.count++
      } else {
        state.cartProducts.push({ ...payload, count: 1 })
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
  },
})

export default tabsSlice.reducer

export const { openCart, closeCart, closeSidebar, openSideBar, addItemToCart } =
  tabsSlice.actions
