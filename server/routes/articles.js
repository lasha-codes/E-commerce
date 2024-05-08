import express from 'express'
const router = express.Router()

import { addArticle, getArticles } from '../controllers/articles.js'

router.post('/add-article', addArticle)
router.get('/get-articles', getArticles)

export default router
