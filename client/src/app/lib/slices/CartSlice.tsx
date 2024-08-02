import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "@/app/interfaces/Cart";

interface IState {
    loading: boolean
    cart: ICart[] | []
    errors: string | null
}

const initialState:IState = {
    loading: false,
    cart: JSON.parse(localStorage.getItem('cart')!) || [],
    errors: null
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCookieCart (state, action) {
            if(action.payload){
                const item = state.cart.findIndex(cartItem => cartItem.product_id === action.payload.product_id)
                if(item >= 0) {
                    state.cart[item].count += action.payload.count
                    localStorage.setItem("cart", JSON.stringify(state.cart))
                }else {
                    state.cart = [...state.cart, action.payload] 
                    localStorage.setItem("cart", JSON.stringify(state.cart))
                }
            }
        },
        removeFromCookieCart(state, action) {
            state.cart = state.cart.filter(item => item.product_id !== action.payload.product_id)
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        changeCountOfItem (state, action) {
            const item = state.cart.findIndex(cartItem => cartItem.product_id === action.payload.product_id)
            if(item >= 0) {
                state.cart[item].count = action.payload.count
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
        },
    }
})

export default CartSlice.reducer
export const {addToCookieCart, removeFromCookieCart, changeCountOfItem} = CartSlice.actions
