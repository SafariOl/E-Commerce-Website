'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IReview } from "@/app/interfaces/Product";
import { addReview, getFilteredItems, getProduct, getProducts, getReviews, getSixProducts } from "../thunks/shopThunks";

interface IState {
    items: Array<IProduct>,
    item: IProduct | null | void,
    error: unknown | null,
    loading: boolean,
    reviews: IReview[] | null
}

const initialState:IState = {
    items: [],
    item: null,
    reviews: [] || null,
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

        builder.addCase(getReviews.pending, (state) => {state.loading = true})
        builder.addCase(getReviews.fulfilled, (state, action) => {
            state.loading = false
            state.error = null
            state.reviews = action.payload
        })
        builder.addCase(getReviews.rejected, (state, action) => {
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

        /////////////////////

        builder.addCase(addReview.pending, (state) => {state.loading = true})
        builder.addCase(addReview.fulfilled, (state, action: PayloadAction<IReview[]>) => {
            state.loading = false
            state.error = null
            state.reviews = action.payload
        })
        builder.addCase(addReview.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default shopSlice.reducer
