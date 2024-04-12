import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: false,
  continued: false,
  addedImages: [],
}

const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    openAddImage: (state) => {
      state.toggle = true
    },
    closeAddImage: (state) => {
      state.toggle = false
    },
  },
})

export default productSlice.reducer

export const { openAddImage, closeAddImage } = productSlice.actions
