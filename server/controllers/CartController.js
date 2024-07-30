const CartService = require("../services/CartService")
const {validationResult} = require('express-validator')

class CartController {
    async addToCart (req, res, next) {
        try {
            const errors = validationResult(req)
            if(errors) next()
            const message = await CartService.addToCart(req.body)
            return res.status(200).json(message)
        } catch (e) {
            next(e)
        }
    }

    async removeFromCart (req, res, next) {
        try {
            const {customerId, productId, sizeName} = req.params
            const cart = await CartService.removeFromCart(customerId, productId, sizeName)
            return res.status(200).json(cart)
        } catch (e) {
            next(e)
        }
    }

    async getCustomerCart (req, res, next) {
        try {
            const customerId = req.params.customerId
            const cart = await CartService.getCustomerCart(customerId)
            return res.status(200).json(cart)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CartController()