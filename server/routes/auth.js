import express from 'express'
import {
  authenticateToken,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/auth.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/authenticate', authenticateToken)

export default router
