import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

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
        toast.error('Only 2 images allowed.')
      } else {
        state.addedImages.push(address)
      }
    },
    continueProduct: (state) => {
      state.continued = true
    },
    backToProduct: (state) => {
      state.continued = false
    },
  },
})

export default productSlice.reducer

export const {
  openAddImage,
  closeAddImage,
  addImage,
  continueProduct,
  backToProduct,
} = productSlice.actions
