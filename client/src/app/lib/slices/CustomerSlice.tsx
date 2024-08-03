import { createSlice } from "@reduxjs/toolkit";
import { ICustomer, IError } from "../../interfaces/Customer";
import { activate, changeName, changePassword, customerLogin, customerRegister, logout, refresh } from "../thunks/customerThunks";



interface IState {
    customer: ICustomer | null,
    loading: boolean,
    errors: string | null
}

const initialState:IState = {
    customer: null,
    loading: false,
    errors: null
}

const CustomerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(customerRegister.pending, (state) => {state.loading = true})
        builder.addCase(customerRegister.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            if(action.payload && action.payload as ICustomer){
                state.customer = action.payload
                localStorage.setItem('token', action.payload.refreshToken)
            }
        })
        builder.addCase(customerRegister.rejected, (state, action) => {
            state.loading = false
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })

        /////////////////////

        builder.addCase(customerLogin.pending, (state) => {state.loading = true})
        builder.addCase(customerLogin.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.customer = action.payload
            localStorage.setItem('token', action.payload.accessToken)
        })
        builder.addCase(customerLogin.rejected, (state, action) => {
            state.loading = false
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })

        //////////////

        builder.addCase(activate.pending, (state) => {state.loading = true})
        builder.addCase(activate.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.customer = action.payload
            localStorage.setItem('token', action.payload.accessToken)
        })
        builder.addCase(activate.rejected, (state, action) => {
            state.loading = false
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })

        //////////////

        builder.addCase(refresh.pending, (state) => {state.loading = true})
        builder.addCase(refresh.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.customer = action.payload
            localStorage.setItem('token', action.payload.accessToken)

        })
        builder.addCase(refresh.rejected, (state, action) => {
            state.loading = false
            state.customer = null
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })

        builder.addCase(changeName.pending, (state) => {state.loading = true})
        builder.addCase(changeName.fulfilled, (state, action) => {
            state.loading = false
            state.errors = null
            state.customer = action.payload
            localStorage.setItem('token', action.payload.accessToken)
        })
        builder.addCase(changeName.rejected, (state, action) => {
            state.loading = false
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })

        builder.addCase(logout.pending, (state) => {state.loading = true})
        builder.addCase(logout.fulfilled, (state) => {
            state.loading = false
            state.errors = null
            state.customer = null
            localStorage.removeItem('token')
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
            if(action.payload) {
                const errorPayload = action.payload as IError;
                state.errors = errorPayload.message
            }
        })
    }
})

export default CustomerSlice.reducer