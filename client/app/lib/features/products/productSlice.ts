import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import axios, { AxiosResponse } from 'axios'

const initialState: {
  products: object[]
  productReviews: []
  toggle: boolean
  continued: boolean
  addedImages: string[] | any
  isLoading: string | 'pending' | 'rejected' | 'idle'
  reviewsLoading: string | 'pending' | 'rejected' | 'idle'
  toReview: boolean
} = {
  products: [],
  productReviews: [],
  toggle: false,
  continued: false,
  toReview: false,
  isLoading: 'idle',
  reviewsLoading: 'idle',
  addedImages: [],
}

interface productTypes {
  name: string
  description: string
  price: number | string
  type: string
  addedImages: [string] | any
  gender: string
}

axios.defaults.baseURL = 'http://localhost:4000'

export const addProductToDB = createAsyncThunk(
  'product/fetchData',
  async (product: productTypes): Promise<any> => {
    const { name, description, price, type, addedImages, gender } = product
    const response: AxiosResponse<any> = await axios.post('/products/add', {
      title: name,
      description,
      price,
      type,
      images: addedImages,
      gender,
    })
    return response.data
  }
)

export const getProductsFromDB = createAsyncThunk(
  'product/getProducts',
  async () => {
    try {
      const response = await axios.get('/products/get')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
)

export const getProductReviewsFromDB = createAsyncThunk(
  '/products/getReviews',
  async () => {
    try {
      const response = await axios.get('/products/reviews')
      return response.data
    } catch (err) {
      console.error(err)
    }
  }
)

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
      state.toReview = false
    },
    submitProduct: (state) => {
      state.toReview = true
    },
    handleSubmitProduct: (state) => {
      state.toReview = false
      state.continued = false
      state.addedImages = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToDB.pending, (state) => {
      state.isLoading = 'pending'
    }),
      builder.addCase(addProductToDB.fulfilled, (state) => {
        state.isLoading = 'idle'
      }),
      builder.addCase(addProductToDB.rejected, (state) => {
        state.isLoading = 'rejected'
      })
    builder.addCase(getProductsFromDB.pending, (state) => {
      state.products = []
    })
    builder.addCase(getProductsFromDB.fulfilled, (state, action) => {
      state.products = action.payload
    })
    builder.addCase(getProductsFromDB.rejected, (state) => {
      state.products = []
    })
    builder.addCase(getProductReviewsFromDB.pending, (state) => {
      state.reviewsLoading = 'pending'
    })
    builder.addCase(getProductReviewsFromDB.rejected, (state) => {
      state.reviewsLoading = 'rejected'
    })
    builder.addCase(getProductReviewsFromDB.fulfilled, (state, action) => {
      state.reviewsLoading = 'idle'
      state.productReviews = action.payload
    })
  },
})

export default productSlice.reducer

export const {
  openAddImage,
  closeAddImage,
  addImage,
  continueProduct,
  backToProduct,
  submitProduct,
  handleSubmitProduct,
} = productSlice.actions
