import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartOpen: false,
}

const tabsSlice = createSlice({
  initialState,
  name: 'tabs',
  reducers: {},
})

export default tabsSlice.reducer
