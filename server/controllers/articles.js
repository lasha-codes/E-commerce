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
