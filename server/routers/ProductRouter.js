const ProductControllers = require('../controllers/ProductControllers')
const router = require('express').Router()

router.post('/add-product', ProductControllers.insertProduct)
router.post('/add-review', ProductControllers.addReview)
router.post('/get-filter', ProductControllers.getProductsByFilter)
router.get('/get-product/:productId', ProductControllers.getProduct)
router.get('/get-products', ProductControllers.getProducts)
router.get('/:genderName', ProductControllers.getProductsByGender)

module.exports = router