'use client'
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "@/app/interfaces/Product";
import { getFilteredItems, getProduct, getProducts, getSixProducts } from "../thunks/shopThunks";

interface IState {
    items: Array<IProduct>,
    item: IProduct | null,
    error: unknown | null,
    loading: boolean,
}

const initialState:IState = {
    items: [],
    item: null,
    error: null,
    loading: false
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {state.loading = true})
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.items = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        //////////////////

        builder.addCase(getProduct.pending, (state) => {state.loading = true})
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.item = action.payload
        })
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })


        /////////////////

        builder.addCase(getFilteredItems.pending, (state) => {state.loading = true})
        builder.addCase(getFilteredItems.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.items = action.payload
        })
        builder.addCase(getFilteredItems.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        ////////////////

        builder.addCase(getSixProducts.pending, (state) => {state.loading = true})
        builder.addCase(getSixProducts.fulfilled, (state, action) => {
            state.loading = false
            state.error = false
            state.items = action.payload
        })
        builder.addCase(getSixProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default shopSlice.reducer
