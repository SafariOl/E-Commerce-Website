const sql = require("../db")

class CartService {
    async addToCart ({customer_id, product_id, count, size}) {
        const [cartItem] = await sql.query(`
            SELECT * FROM cart WHERE customer_id = ? AND product_id = ?
        `, [customer_id, product_id])
        if(cartItem[0] && cartItem[0].size === size){
            const newCount = cartItem[0].count + count
            await sql.query(`
                UPDATE cart SET count = ? WHERE customer_id = ? AND product_id = ?
            `, [newCount, customer_id, product_id])
            return
        }
        await sql.query(`
            INSERT INTO cart () VALUES (?, ?, ?, ?) 
        `, [customer_id, product_id, count, size])
        return {message: 'success'}
    }

    async removeFromCart (customer_id, product_id, size) {
        console.log(size)
        await sql.query(`
            DELETE FROM cart WHERE customer_id = ? AND product_id = ? AND size = ?
        `, [customer_id, product_id, size])
        return await this.getCustomerCart(customer_id)
    }

    async getCustomerCart (customerId) {
        const [cart] = await sql.query(`
            SELECT * FROM cart WHERE customer_id = ?
        `, [customerId])
        if(!cart) return {message: 'empty cart'}
        
        const products = await Promise.all(cart.map(async(item) => {
            const [product] = await sql.query(`
                SELECT * FROM products WHERE product_id = ?
            `, [item.product_id])

            return {
                product_id: product[0].product_id,
                item_name: product[0].name,
                main_img: product[0].main_img.toString('base64'),
                color: product[0].color,
                price: product[0].price,
                count: item.count,
                size: item.size,
                gender: product[0].gender
            }
        }))

        return products
    }
}

module.exports = new CartService()