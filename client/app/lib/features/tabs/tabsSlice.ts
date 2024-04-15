import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartOpen: false,
  sideBarOpen: false,
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
  },
})

export default tabsSlice.reducer

export const { openCart, closeCart, closeSidebar, openSideBar } =
  tabsSlice.actions
