import express from 'express'
const router = express.Router()

import {
  addArticle,
  getArticles,
  updateArticle,
} from '../controllers/articles.js'

router.post('/add-article', addArticle)
router.put('/update-article', updateArticle)
router.get('/get-articles', getArticles)

export default router
