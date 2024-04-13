import pool from '../database/postgres.js'

export const addProduct = async (req, res) => {
  const { images, title, description, type } = req.body
  try {
    const query =
      'INSERT INTO products (image, title, description) VALUES ($1, $2, $3, $4) returning *'
    const data = await pool.query(query, [images, title, description, type])
    res.status(200).json(data.rows)
  } catch (err) {
    res.status(500).json({ message: 'Server error please try again.' })
  }
}
