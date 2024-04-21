import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoaded: false,
  user: {},
}

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    pageIsLoaded: (state) => {
      state.isLoaded = true
    },
    getUser: (state, { payload }) => {
      state.user = payload
    },
  },
})

export default userSlice.reducer

export const { pageIsLoaded, getUser } = userSlice.actions
