import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const initialState = {
  cartProducts: [],
  cartOpen: false,
  sideBarOpen: false,
}

interface ProductType {
  id: number
  sold: number
  price: number
  image: string[]
  discountedPrice: null | number
  title: string
  description: string
  count: number
}

const tabsSlice = createSlice({
  initialState,
  name: 'tabs',
  reducers: {
    openCart: (state) => {
      state.cartOpen = true
      state.sideBarOpen = false
    },
    closeCart: (state) => {
      state.cartOpen = false
    },
    openSideBar: (state) => {
      state.sideBarOpen = true
      state.cartOpen = false
    },
    closeSidebar: (state) => {
      state.sideBarOpen = false
    },
    addItemToCart: (state: any, { payload }: { payload: ProductType }) => {
      console.log({ ...payload, count: 1 })
      const productInCart = state.cartProducts.find((product: ProductType) => {
        return product.id === payload.id
      })
      if (productInCart) {
        productInCart.count++
        toast.success(`${productInCart.title} QTY increased`)
      } else {
        toast.success(`${payload.title} Added to the cart`)
        state.cartProducts.push({ ...payload, count: 1 })
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
    renderCart: (state: any) => {
      if (localStorage.getItem('cartProducts')) {
        state.cartProducts = JSON.parse(localStorage.getItem('cartProducts')!)
      } else {
        state.cartProducts = []
      }
    },
    decreaseProductQTY: (state: any, { payload }) => {
      const targetedProduct = state.cartProducts.find(
        (product: ProductType) => {
          return payload.id === product.id
        }
      )
      if (targetedProduct.count === 1) {
        toast.success(`${targetedProduct.title} removed from the cart`)
        state.cartProducts = state.cartProducts.filter(
          (product: ProductType) => {
            return targetedProduct.id !== product.id
          }
        )
      } else {
        toast.success(`${targetedProduct.title} QTY decreased`)
        targetedProduct.count -= 1
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
    increaseProductQuantity: (state: any, { payload }) => {
      const targetedProduct = state.cartProducts.find(
        (product: ProductType) => {
          return payload.id === product.id
        }
      )
      targetedProduct.count += 1
      toast.success(`${targetedProduct.title} increased`)
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
    },
    removeProductFromTheCart: (state: any, { payload }) => {
      state.cartProducts = state.cartProducts.filter((product: ProductType) => {
        return product.id !== payload.id
      })
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts))
      toast.success(`${payload.title} removed from the cart`)
    },
  },
})

export default tabsSlice.reducer

export const {
  openCart,
  closeCart,
  closeSidebar,
  openSideBar,
  addItemToCart,
  renderCart,
  decreaseProductQTY,
  increaseProductQuantity,
  removeProductFromTheCart,
} = tabsSlice.actions
