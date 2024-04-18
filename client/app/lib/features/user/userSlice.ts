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
      console.log(state.isLoaded)
    },
    getUser: (state, { payload }) => {
      state.user = payload
      console.log(state.user)
    },
  },
})

export default userSlice.reducer

export const { pageIsLoaded, getUser } = userSlice.actions
