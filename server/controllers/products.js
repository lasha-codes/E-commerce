import pool from '../database/postgres.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const addProduct = async (req, res) => {
  const { images, title, description, type, price, gender } = req.body
  try {
    const query =
      'INSERT INTO products (image, title, description, type, price, gender, rating) VALUES ($1, $2, $3, $4, $5, $6, $7)'
    const data = await pool.query(query, [
      images,
      title,
      description,
      type,
      parseInt(price),
      gender,
      [],
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
  const { id, comment, review, title } = req.body
  if (!token) {
    return res.status(400).json({ message: 'Unauthorized request.' })
  }
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET)
    const query = 'SELECT * FROM users WHERE email = $1'
    const author = await pool.query(query, [email])
    const date = new Date()

    const getRatingQuery = 'SELECT rating FROM products WHERE id = $1'

    const addProductQuery =
      'INSERT INTO reviews (product_id, title, comment, author, review, date) VALUES ($1, $2, $3, $4, $5, $6)'

    await pool.query(addProductQuery, [
      id,
      title,
      comment,
      author.rows[0].username,
      review,
      date,
    ])
    const ratingArray = await pool.query(getRatingQuery, [id])
    const newArray = ratingArray.rows[0].rating
    newArray.push(review)
    await pool.query('UPDATE products SET rating = $1 WHERE id = $2', [
      newArray,
      id,
    ])
    res.status(200).json({ message: 'Added a review.' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getProductReviews = async (req, res) => {
  try {
    const query = 'SELECT * FROM reviews'
    const reviews = await pool.query(query)
    res.status(200).json(reviews.rows)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const calculateProductSalesOnCheckout = (req, res) => {
  const { products } = req.body
  try {
    products &&
      products.forEach(async (product) => {
        const query = 'UPDATE products SET sold = sold + $1 WHERE id = $2'
        await pool.query(query, [product.count, product.id])
      })
    res.status(200).json({
      message: 'U have just increased sales for the each product in your cart.',
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updateProduct = async (req, res) => {
  const { newTitle, newDesc, discountedPrice, productId } = req.body
  try {
    const query =
      'UPDATE products SET title = $1, description = $2, discountedprice = $3 WHERE id = $4'

    await pool.query(query, [newTitle, newDesc, discountedPrice, productId])
    res.status(200).json({ message: 'Successfully updated the product' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const deleteProduct = async (req, res) => {
  const { deleteProductId } = req.body
  try {
    const query = 'DELETE FROM products WHERE id = $1'
    await pool.query(query, [deleteProductId])
    res.status(200).json({ message: 'Product Deleted' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
