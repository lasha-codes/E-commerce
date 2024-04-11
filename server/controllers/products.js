import pool from '../database/postgres.js'

export const addProduct = async (req, res) => {
  const { image, title, description } = req.body
  const query =
    'INSERT INTO products (image, title, description) VALUES ($1, $2, $3) returning *'
  const data = await pool.query(query, [image, title, description])
  res.json(data.rows)
}
