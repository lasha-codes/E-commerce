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
    },
    addToArticlesFront: (state: any, { payload }) => {
      state.articles.push(payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getArticlesFromDb.pending, (state: any) => {
      state.articles = []
    }),
      builder.addCase(getArticlesFromDb.fulfilled, (state: any, action) => {
        state.articles = action.payload
      }),
      builder.addCase(getArticlesFromDb.rejected, (state: any) => {
        state.articles = []
      })
  },
})

export default userSlice.reducer

export const { pageIsLoaded, getUser, addToArticlesFront } = userSlice.actions
