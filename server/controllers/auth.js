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

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'both fields are required' })
    }
    const query = 'SELECT * FROM users WHERE email = $1'
    const user = await postgres.query(query, [email])
    if (user.rows.length === 0) {
      return res.status(400).json({
        message: 'This account does not exist',
      })
    }
    const passwordMatch = await bcrypt.compare(password, user.rows[0].password)

    if (passwordMatch) {
      jwt.sign({
        email: user.rows[0].email,
        username: user.rows[0].username,
      })
      res.status(200).json({
        message: 'User has successfully logged in',
      })
    } else {
      res.status(400).json({
        message: 'Wrong credentials',
      })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const authenticateToken = (req, res) => {
  try {
    const { token } = req.cookies
    if (!token) return
    jwt.verify(token, process.env.JWT_SECRET, async (err, token) => {
      if (err) throw err
      const { email } = token
      const query = 'SELECT * FROM users WHERE email = $1'
      const loggedQuery = await postgres.query(query, [email])
      res.status(200).json(loggedQuery.rows[0])
    })
  } catch (err) {
    res.status(500).json({ message: 'Could not authenticate user' })
  }
}
