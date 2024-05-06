import express from 'express'
const router = express.Router()

import { addArticle } from '../controllers/articles.js'

router.post('/add-article', addArticle)

export default router
