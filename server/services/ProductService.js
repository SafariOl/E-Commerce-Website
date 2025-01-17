const uuid = require('uuid')
const sql = require('../db')
const fs = require('fs')
const CustomerService = require('./CustomerService')

class ProductService {
    async insertProduct ({name, price, color, style, discount, description, main_img, img1, img2}) {
        const product_id = uuid.v4()

        img1 = fs.readFileSync(process.env.IMG_DIR + img1)
        img2 = fs.readFileSync(process.env.IMG_DIR + img2)
        main_img = fs.readFileSync(process.env.IMG_DIR + main_img)

        await sql.query(`
            INSERT INTO products () 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
            [product_id, name, price, style, discount, description, color, main_img, img1, img2], 
        )
        
        return await this.getProduct(product_id)
    }
    async getGenderProducts(gender) {
        const [products] = await sql.query(`
            SELECT * FROM products WHERE gender=?
        `, [gender])

        return products
    }
    async getProduct (product_id) {
        const [product] = await sql.query(`
            SELECT * FROM products WHERE product_id = ?
        `, [product_id])

        const reviews = await this.getReviews(product_id)
        let rate = 0
        if(reviews.length > 0){
            await reviews.map(review => {
                rate += parseFloat(review.rate) 
            })
            rate /= reviews.length
            rate = rate.toFixed(1)
        }
        const result = product[0]
        return {
            ...result, 
            rate,
            main_img: result.main_img.toString('base64'),
            img1: result.img1.toString('base64'),
            img2: result.img2.toString('base64'),
        }
    }
    async getProducts () {
        const [products] = await sql.query(`
            SELECT * FROM products ORDER BY price LIMIT 6
        `)
        const result = products.map(product => {
            return {
                ...product,
                main_img: product.main_img.toString('base64'),
                img1: product.img1.toString('base64'),
                img2: product.img2.toString('base64'),
            }
        })
        return result
    }
    async getProductsByCategory (category) {
        let products
        if(category !== 'O'){
            [products ] = await sql.query(`
            SELECT * FROM products WHERE gender = ?
            `, [category])
        }else {
            [products] = await sql.query(`
              SELECT * FROM products WHERE discount IS NOT NULL  
            `)
        }

        const result = await Promise.all(products.map(async(product) => {
        const productReviews = await this.getReviews(product.product_id)
        let rate = 0
        if(productReviews.length > 0){
            productReviews.forEach(el => {
                rate += parseFloat(el.rate)
            });
            rate = (rate/productReviews.length).toFixed(1)
        }
        
        return {
            ...product,
            main_img: product.main_img.toString('base64'),
            img1: product.img1.toString('base64'),
            img2: product.img2.toString('base64'),
            rate,
        }}));

        return result
    }
    async addReview ({product_id, rate, review, user}){
        const customer = await CustomerService.getCustomer(user)
        await sql.query(`
            INSERT INTO product_reviews() VALUES(?, ?, ?, ?)
        `, [product_id, review, rate, customer.user_name])
        return await this.getReviews(product_id)
    }
    async getReviews (product_id) {
        const [reviews] = await sql.query(`
            SELECT * FROM product_reviews WHERE product_id = ?
        `, [product_id])

        return reviews || null
    }
    async getProductsByFilter ({category, price, color, size, style, gender}) {
        let conditions = [];
        let values = [];
        
        if(gender !== 'O') {
            values.push(gender)
            conditions.push(`gender = ?`)
        }else conditions.push(`discount IS NOT NULL`)
        

        if (category.length > 0) {
            const categoryPlaceholders = category.map(() => '?').join(', ');
            conditions.push(`category IN (${categoryPlaceholders})`);
            values.push(...category);
        }

        if (color.length > 0) {
            const colorPlaceholders = color.map(() => '?').join(', ');
            conditions.push(`color IN (${colorPlaceholders})`);
            values.push(...color);
        }
          
        if (style.length > 0) {
            const stylePlaceholders = style.map(() => '?').join(', ');
            conditions.push(`style IN (${stylePlaceholders})`);
            values.push(...style);
        }
          
        conditions.push(`price BETWEEN ? AND ?`);
        values.push(price[0], price[1]);
          
        let query = `SELECT * FROM products WHERE ${conditions.join(' AND ')}`;
        const [products] = await sql.query(query, values)
        const result = await products.map(product => ({
            ...product,
            main_img: product.main_img.toString('base64'),
            img1: product.img1.toString('base64'),
            img2: product.img2.toString('base64'),
        }));

        return result
    }
}

module.exports = new ProductService()