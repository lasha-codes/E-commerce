import express from 'express'
import { authenticateToken, registerUser } from '../controllers/auth.js'
const router = express.Router()

router.post('/register', registerUser)
router.get('/authenticate', authenticateToken)

export default router
