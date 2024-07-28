import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IReview } from "@/app/interfaces/Product";
import { IFilter } from "@/app/interfaces/Filter";
import { API_KEY } from "@/app/utils/api";

export const getProducts = createAsyncThunk('src/getProducts', async(gender: string) => {
    const res = await axios.get(`${API_KEY}/products/${gender}`)
    return res.data
})

export const getProduct = createAsyncThunk('/src/getProduct', async(productId:string) => {
    const res = await axios.get(`${API_KEY}/products/get-product/${productId}`)
    return res.data
})

export const addReview = createAsyncThunk('/src/addReview', async(reviewInfo:IReview) => {
    await axios.post(`${API_KEY}/products/add-review`, {...reviewInfo})
})

export const getFilteredItems = createAsyncThunk('/src/getFilteredItems', async(filterInfo:IFilter) => {
    const res = await axios.post(`${API_KEY}/products/get-filter`, {...filterInfo})
    return res.data
})

export const getSixProducts = createAsyncThunk('src/getSixProducts', async() => {
    const res = await axios.get(`${API_KEY}/products/get-products`)
    return res.data
})