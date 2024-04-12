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
    addImage: (state, action) => {
      const { address } = action.payload
    },
  },
})

export default productSlice.reducer

export const { openAddImage, closeAddImage } = productSlice.actions
