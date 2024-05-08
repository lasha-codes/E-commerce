import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:4000'

const initialState = {
  isLoaded: false,
  user: {},
  articles: [],
}

export const getArticlesFromDb = createAsyncThunk(
  'articles/fetchData',
  async () => {
    const response = await axios.get('/articles/get-articles')
    return response.data
  }
)

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    pageIsLoaded: (state) => {
      state.isLoaded = true
    },
    getUser: (state, { payload }) => {
      state.user = payload
      console.log(state.user)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromDb.pending, (state: any, action) => {
      state.articles = []
    }),
      builder.addCase(getArticlesFromDb.fulfilled, (state: any, action) => {
        state.articles = action.payload
        console.log(state.articles)
      }),
      builder.addCase(getArticlesFromDb.rejected, (state: any, payload) => {
        state.articles = []
      })
  },
})

export default userSlice.reducer

export const { pageIsLoaded, getUser } = userSlice.actions
