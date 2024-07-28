require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const ProductRouter = require('./routers/ProductRouter')
const CustomerRouter = require('./routers/CustomerRouter')
const CartRouter = require('./routers/CartRouter')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cors({
    origin: process.env.CLIENT_API_URI,
    credentials: true,
    exposedHeaders: ["set-cookie"]
}))
app.use(cookieParser())
app.use(`/api/customers`, CustomerRouter)
app.use(`/api/products`, ProductRouter)
app.use(`/api/cart`, CartRouter)

const port = process.env.PORT

app.listen(port, () => console.log(`Connected To PORT = ${port}`))