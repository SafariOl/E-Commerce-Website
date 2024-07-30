const CartController = require('../controllers/CartController')
const router = require('express').Router()
const {body} = require('express-validator')

const bodyCart = [body("customer_id").notEmpty(), body("product_id").notEmpty(), body("size").notEmpty()]

router.post('/add-to-cart', bodyCart, CartController.addToCart)
router.delete('/remove-from-cart/:customerId/:productId/:sizeName', CartController.removeFromCart)
router.get('/get-cart/:customerId', CartController.getCustomerCart)

module.exports = router