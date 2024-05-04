import express from 'express'
import {
  addProduct,
  addProductReview,
  calculateProductSalesOnCheckout,
  getProductReviews,
  getProducts,
  updateProduct,
} from '../controllers/products.js'
const router = express.Router()

router.get('/get', getProducts)
router.get('/reviews', getProductReviews)
router.post('/add', addProduct)
router.post('/calculate-sales', calculateProductSalesOnCheckout)
router.post('/add-review', addProductReview)
router.put('/update-product', updateProduct)

export default router
