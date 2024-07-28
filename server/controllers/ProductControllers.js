const ProductService = require('../services/ProductService')

class ProductController {
    async insertProduct(req, res, next) {
        try {
            const product = await ProductService.insertProduct(req.body);
            return res.status(200).json(product);
        } catch (e) {
            next(e);
        }
    }
    
    async getProduct (req, res, next) {
        try{
            const productId = req.params.productId
            const product = await ProductService.getProduct(productId)
            return res.status(200).json(product);
        }catch(e){
            next(e)
        }
    }

    async getProducts (req, res, next) {
        try {
            const products = await ProductService.getProducts()
            return res.status(200).json(products)            
        } catch (e) {
            next(e)
        }
    }

    async getProductsByGender (req, res, next) {
        try {
            const genderName = req.params.genderName
            const products = await ProductService.getProductsByGender(genderName)
            return res.status(200).json(products)            
        } catch (e) {
            next(e)
        }
    }

    async addReview (req, res, next) {
        try {
            const review = await ProductService.addReview(req.body)
            return res.status(200).json(review);
        } catch (e) {
            next(e)
        }
    }

    async getByCategory (req, res, next) {
        try{
            const categoryName = req.params.categoryName
            const products = await ProductService.getByCategory(categoryName)
            return res.status(200).json(products)
        }catch(e) {
            next(e)
        }
    }

    async getProductsByFilter (req, res, next) {
        try {
            const products = await ProductService.getProductsByFilter(req.body)
            return res.status(200).json(products)            
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ProductController();
