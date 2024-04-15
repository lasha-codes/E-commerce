import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import axios, { AxiosResponse } from 'axios'

const initialState: {
  products: object[]
  toggle: boolean
  continued: boolean
  addedImages: string[] | any
  isLoading: string | 'pending' | 'rejected' | 'idle'
  toReview: boolean
} = {
  products: [],
  toggle: false,
  continued: false,
  toReview: false,
  isLoading: 'idle',
  addedImages: [],
}

interface productTypes {
  name: string
  description: string
  price: number | string
  type: string
  addedImages: [string] | any
}

axios.defaults.baseURL = 'http://localhost:4000'

export const addProductToDB = createAsyncThunk(
  'product/fetchData',
  async (product: productTypes): Promise<any> => {
    const { name, description, price, type, addedImages } = product
    const response: AxiosResponse<any> = await axios.post('/products/add', {
      title: name,
      description,
      price,
      type,
      images: addedImages,
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
