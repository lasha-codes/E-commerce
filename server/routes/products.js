import express from 'express'
import {
  addProduct,
  addProductReview,
  getProductReviews,
  getProducts,
} from '../controllers/products.js'
const router = express.Router()

router.get('/get', getProducts)
router.get('/reviews', getProductReviews)
router.post('/add', addProduct)
router.post('/add-review', addProductReview)

export default router
