import pool from '../database/postgres.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const addProduct = async (req, res) => {
  const { images, title, description, type, price, gender } = req.body
  try {
    const query =
      'INSERT INTO products (image, title, description, type, price, gender) VALUES ($1, $2, $3, $4, $5, $6)'
    const data = await pool.query(query, [
      images,
      title,
      description,
      type,
      parseInt(price),
      gender,
    ])
    res.status(200).json(data.rows)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server error please try again.' })
  }
}

export const getProducts = async (req, res) => {
  try {
    const query = 'SELECT * FROM products'
    const products = await pool.query(query)
    res.status(200).json(products.rows)
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong with the server please try again',
    })
  }
}

export const addProductReview = async (req, res) => {
  const { token } = req.cookies
  if (!token) {
    return res.status(400).json({ message: 'Unauthorized request.' })
  }
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET)
    const query = 'SELECT * FROM users WHERE email = $1'
    const author = await postgres.query(query, [email])
    res.json(author.rows)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
