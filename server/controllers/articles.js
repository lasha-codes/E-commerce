import pool from '../database/postgres.js'
import jwt from 'jsonwebtoken'

export const addArticle = async (req, res) => {
  const { token } = req.cookies
  const { image, title, summary } = req.body
  try {
    if (!token) {
      return res.status(400).json({ message: 'Unauthorized request' })
    }
    const query =
      'INSERT INTO articles (image, title, summary, author) VALUES ($1, $2, $3, $4)'
    await pool.query(query, [image, title, summary])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
