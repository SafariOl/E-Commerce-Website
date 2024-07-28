const CartController = require('../controllers/CartController')

const router = require('express').Router()

router.post('/add-to-cart', CartController.addToCart)
router.delete('/remove-from-cart/:customerId/:productId/:sizeName', CartController.removeFromCart)
router.get('/get-cart/:customerId', CartController.getCustomerCart)

module.exports = router