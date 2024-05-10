import express from 'express'
const router = express.Router()

import {
  addArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from '../controllers/articles.js'

router.post('/add-article', addArticle)
router.put('/update-article', updateArticle)
router.get('/get-articles', getArticles)
router.delete('/delete-article', deleteArticle)

export default router
