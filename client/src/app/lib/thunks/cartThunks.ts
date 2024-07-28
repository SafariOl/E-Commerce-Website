import { ICartPost, ICartRemove } from "@/app/interfaces/Cart"
import { API_KEY } from "@/app/utils/api"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const addToCart = createAsyncThunk('/src/addToCart', async(cartInfo:ICartPost) => {
    await axios.post(`${API_KEY}/cart/add-to-cart`, {...cartInfo})
})

export const removeFromCart = createAsyncThunk('/src/removeFromCart', async(removeItem:ICartRemove) => {
    const res = await axios.delete(`${API_KEY}/cart/remove-from-cart/${removeItem.customer_id}/${removeItem.product_id}/${removeItem.size}`,)
    return res.data
})

export const getCustomerCart = createAsyncThunk('/src/getCustomerCart', async(customer_id:string) => {
    const res = await axios.get(`${API_KEY}/cart/get-cart/${customer_id}`)
    return res.data
})
