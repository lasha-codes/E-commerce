import pool from '../database/postgres.js'

export const addProduct = async (req, res) => {
  const { images, title, description } = req.body
  const query =
    'INSERT INTO products (image, title, description) VALUES ($1, $2, $3) returning *'
  const data = await pool.query(query, [images, title, description])
  res.json(data.rows)
}
