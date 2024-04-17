import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import postgres from '../database/postgres.js'
import bcrypt from 'bcryptjs'
dotenv.config()

export const registerUser = async (req, res) => {
  const { email, username, password } = req.body
  if (!email || !username || !password) {
    return res.status(400).json({ message: 'All of the fields are required' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log(hashedPassword)
  const query =
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)'
  const registeredUser = await postgres.query(query, [
    email,
    username,
    hashedPassword,
  ])
  res.status(200).json(registerUser.rows)
  console.log(registerUser)
}
