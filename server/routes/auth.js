import express from 'express'
import {
  authenticateToken,
  becomeAdmin,
  becomeVendor,
  checkoutStripe,
  loginUser,
  logoutUser,
  quitBeingAdmin,
  registerUser,
} from '../controllers/auth.js'
const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/become-admin', becomeAdmin)
router.post('/become-vendor', becomeVendor)
router.post('/quit-admin', quitBeingAdmin)
router.post('/create-checkout', checkoutStripe)
router.get('/authenticate', authenticateToken)

export default router
