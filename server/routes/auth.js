import express from 'express'
import {
  authenticateToken,
  becomeAdmin,
  becomeVendor,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/auth.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/become-admin', becomeAdmin)
router.post('/become-vendor', becomeVendor)
router.get('/authenticate', authenticateToken)

export default router
