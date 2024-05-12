import pool from '../database/postgres.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const addArticle = async (req, res) => {
  const { token } = req.cookies
  const { image, title, summary, types, user_id } = req.body
  try {
    if (!token) {
      return res.status(400).json({ message: 'Unauthorized request' })
    }
    const { username } = jwt.verify(token, process.env.JWT_SECRET)
    const query =
      'INSERT INTO articles (image, title, summary, author, types, user_id) VALUES ($1, $2, $3, $4, $5, $6)'
    await pool.query(query, [image, title, summary, username, types, user_id])
    res.status(200).json({ message: 'Added the article' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getArticles = async (req, res) => {
  try {
    const query = 'SELECT * FROM articles'
    const articles = await pool.query(query)
    res.status(200).json(articles.rows)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updateArticle = async (req, res) => {
  const { newTitle, newSummary, newTypes, newImage, article_id } = req.body
  try {
    const query =
      'UPDATE articles SET title = $1, summary = $2, types = $3, image = $4, date = now() WHERE id = $5'
    await pool.query(query, [
      newTitle,
      newSummary,
      newTypes,
      newImage,
      article_id,
    ])
    res.status(200).json({ message: 'Successfully updated the article.' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deleteArticle = async (req, res) => {
  const { deleteId } = req.params
  try {
    const query = 'DELETE FROM articles WHERE id = $1'
    await pool.query(query, [deleteId])
    res.status(200).json({ message: 'Successfully deleted the article.' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
