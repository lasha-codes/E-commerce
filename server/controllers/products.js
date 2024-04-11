import pool from '../database/postgres.js'

export const addProduct = async (req, res) => {
  const query =
    'INSERT INTO products (image, title, description) VALUES ($1, $2, $3)'
}
