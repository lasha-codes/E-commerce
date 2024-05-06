import pool from '../database/postgres.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

export const addArticle = async (req, res) => {
  const { token } = req.cookies
  const { image, title, summary } = req.body
  try {
    if (!token) {
      return res.status(400).json({ message: 'Unauthorized request' })
    }
    const { username } = jwt.verify(token, process.env.JWT_SECRET)
    const query =
      'INSERT INTO articles (image, title, summary, author) VALUES ($1, $2, $3, $4)'
    await pool.query(query, [image, title, summary, username])
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
