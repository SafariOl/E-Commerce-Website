require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const ProductRouter = require('./routers/ProductRouter')
const CustomerRouter = require('./routers/CustomerRouter')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/error-middleware')

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_API_URI,
    credentials: true
}))
app.use(cookieParser())
app.use(`/api/customers`, CustomerRouter)
app.use(`/api/products`, ProductRouter)
app.use(errorMiddleware)

const port = process.env.PORT

app.listen(port, () => console.log(`Connected To PORT = ${port}`))