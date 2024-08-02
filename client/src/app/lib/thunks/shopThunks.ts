import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IReview } from "@/app/interfaces/Product";
import { IFilter } from "@/app/interfaces/Filter";
import { API_KEY } from "@/app/utils/api";

export const getProducts = createAsyncThunk('src/getProducts', async(category: string) => {
    const res = await axios.get(`${API_KEY}/products/${category}`)
    return res.data
})

export const getProduct = createAsyncThunk('/src/getProduct', async(productId:string) => {
    const res = await axios.get(`${API_KEY}/products/get-product/${productId}`)
    return res.data
})

export const getReviews = createAsyncThunk('/src/getReviews', async(productId:string) => {
    const res = await axios.get(`${API_KEY}/products/get-reviews/${productId}`)
    return res.data
})

export const addReview = createAsyncThunk<IReview[], {product_id: string, user:string, rate: number, review: string}>('/src/addReview', async({product_id, user, rate, review}) => {
    const res = await axios.post(`${API_KEY}/products/add-review`, {product_id, user, rate, review})
    return res.data
})

export const getFilteredItems = createAsyncThunk('/src/getFilteredItems', async(filterInfo:IFilter) => {
    const res = await axios.post(`${API_KEY}/products/get-filter`, {...filterInfo})
    return res.data
})

export const getSixProducts = createAsyncThunk('src/getSixProducts', async() => {
    const res = await axios.get(`${API_KEY}/products/get-products`)
    return res.data
})