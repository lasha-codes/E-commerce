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
  const checkDupQuery = 'SELECT * FROM users WHERE email = $1'
  const dupUser = await postgres.query(checkDupQuery, [email])
  if (dupUser.rows.length > 0) {
    return res.status(400).json({ message: 'This user already exists' })
  }
  const query =
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)'
  await postgres.query(query, [email, username, hashedPassword])
  jwt.sign({ email, username }, process.env.JWT_SECRET, {}, (err, token) => {
    if (err) throw err
    res
      .cookie('token', token)
      .json({ message: 'User has successfully registered an account' })
  })
}

export const authenticateToken = (req, res) => {
  try {
    const { token } = req.cookies
    if (!token) return
    const { email, name } = jwt.verify(
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) throw err
        res.status(200).json({ email, name })
      }
    )
  } catch (err) {
    res.status(500).json({ message: 'Could not authenticate user' })
  }
}
