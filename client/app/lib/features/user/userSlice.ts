import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {},
})

export default userSlice.reducer
