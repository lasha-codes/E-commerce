import { createSlice } from '@reduxjs/toolkit'

const initialState: {
  toggle: boolean
  continued: boolean
  addedImages: [string] | any
} = {
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
      if (state.addedImages.length === 2) {
        console.log('2 images is the max')
      } else {
        state.addedImages.push(address)
      }
    },
  },
})

export default productSlice.reducer

export const { openAddImage, closeAddImage, addImage } = productSlice.actions
