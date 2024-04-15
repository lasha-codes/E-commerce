import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartOpen: false,
}

const tabsSlice = createSlice({
  initialState,
  name: 'tabs',
  reducers: {
    openCart: (state) => {
      state.cartOpen = true
      console.log(state.cartOpen)
    },
    closeCart: (state) => {
      state.cartOpen = false
    },
  },
})

export default tabsSlice.reducer

export const { openCart, closeCart } = tabsSlice.actions
