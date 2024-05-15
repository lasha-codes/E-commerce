import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import productRoutes from './routes/products.js'
import authRoutes from './routes/auth.js'
import articleRoutes from './routes/articles.js'
dotenv.config()

const app = express()

app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(
  cors({
    origin: 'https://e-commerce-d9ih.vercel.app',
    credentials: true,
  })
)
app.use('/products', productRoutes)
app.use('/user', authRoutes)
app.use('/articles', articleRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
