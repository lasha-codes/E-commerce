import express from 'express'
import {
  addProduct,
  addProductReview,
  getProducts,
} from '../controllers/products.js'
const router = express.Router()

router.get('/get', getProducts)
router.post('/add', addProduct)
router.post('/add-review', addProductReview)

export default router
