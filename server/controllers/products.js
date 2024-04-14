import pool from '../database/postgres.js'

export const addProduct = async (req, res) => {
  const { images, title, description, type, price } = req.body
  try {
    const query =
      'INSERT INTO products (image, title, description, type, price) VALUES ($1, $2, $3, $4, $5)'
    const data = await pool.query(query, [
      images,
      title,
      description,
      type,
      parseInt(price),
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
