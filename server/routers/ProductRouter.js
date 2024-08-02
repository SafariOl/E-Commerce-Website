const ProductControllers = require('../controllers/ProductControllers')
const router = require('express').Router()
const {body} = require('express-validator')

const bodyProduct = [
    body("name").notEmpty(),
    body("price").notEmpty(),
    body("color").notEmpty(),
    body("style").notEmpty(),
    body("description").notEmpty(),
    body("main_img").notEmpty(),
    body("img1").notEmpty(),
    body("img2").notEmpty(),
]
const bodyReview = [
    body("product_id").notEmpty(),
    body("rate").notEmpty(),
    body("review").notEmpty(),
    body("user").notEmpty()
]

router.post('/add-product', bodyProduct, ProductControllers.insertProduct)
router.post('/add-review', bodyReview, ProductControllers.addReview)
router.get('/get-reviews/:productId', ProductControllers.getReviews)
router.post('/get-filter', ProductControllers.getProductsByFilter)
router.get('/get-product/:productId', ProductControllers.getProduct)
router.get('/get-products', ProductControllers.getProducts)
router.get('/:categoryName', ProductControllers.getProductsByCategory)

module.exports = router