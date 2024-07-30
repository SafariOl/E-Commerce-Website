import { createSlice } from "@reduxjs/toolkit";
import { addAddress, editAddress, getAddress, removeAddress } from "../thunks/addressThunk";
import { IAddressInfo } from "@/app/utils/types";

interface IState { 
    address: IAddressInfo[]
    errors: null | string
}

const initialState:IState = {
    address: [],
    errors: null
}

const AddressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getAddress.fulfilled, (state, action) => {
            state.errors = ''
            state.address = action.payload
        })
        builder.addCase(getAddress.rejected, (state) => {
            state.errors = 'error'
        })

        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.errors = ''
            state.address = action.payload
        })
        builder.addCase(addAddress.rejected, (state) => {
            state.errors = 'error'
        })

        builder.addCase(editAddress.fulfilled, (state, action) => {
            state.errors = ''
            state.address = action.payload
        })
        builder.addCase(editAddress.rejected, (state) => {
            state.errors = 'error'
        })

        builder.addCase(removeAddress.fulfilled, (state, action) => {
            state.errors = ''
            state.address = action.payload
        })
        builder.addCase(removeAddress.rejected, (state) => {
            state.errors = 'error'
        })
    }
})

export default AddressSlice.reducer