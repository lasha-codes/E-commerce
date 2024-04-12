import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  continued: false,
  addedImages: [],
}

const productSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {},
})

export default productSlice.reducer
