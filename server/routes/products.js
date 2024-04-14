import express from 'express'
import { addProduct, getProducts } from '../controllers/products.js'
const router = express.Router()

router.get('/get', getProducts)
router.post('/add', addProduct)

export default router
