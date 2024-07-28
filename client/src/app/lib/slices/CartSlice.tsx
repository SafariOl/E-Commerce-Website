import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "@/app/interfaces/Cart";
import { getCustomerCart, removeFromCart } from "../thunks/cartThunks";

interface IState {
    loading: boolean
    cart: ICart[] | null
    errors: string | null
}

const initialState:IState = {
    loading: false,
    cart: null,
    errors: null
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCustomerCart.pending, (state) => {state.loading = true})
        builder.addCase(getCustomerCart.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.cart = action.payload || null
        })
        builder.addCase(getCustomerCart.rejected, (state) => {
            state.loading = false
            state.errors = "Error"
        })

        ///////////////////////

        builder.addCase(removeFromCart.pending, (state) => {state.loading = true})
        builder.addCase(removeFromCart.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.cart = action.payload || null
        })
        builder.addCase(removeFromCart.rejected, (state) => {
            state.loading = false
            state.errors = "Error"
        })
    }
})

export default CartSlice.reducer