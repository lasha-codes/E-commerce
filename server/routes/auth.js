import express from 'express'
import {
  authenticateToken,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/auth.js'
import { getProductReviews } from '../controllers/products.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/authenticate', authenticateToken)
router.get('/reviews', getProductReviews)

export default router
