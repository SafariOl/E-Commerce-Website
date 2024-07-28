import { createSlice } from "@reduxjs/toolkit";

const GenderSelectModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        setOpen (state) {
            state.isOpen = true
        },
        setClose (state) {
            state.isOpen = false
        }
    }
})

export default GenderSelectModalSlice.reducer
export const {setOpen, setClose} = GenderSelectModalSlice.actions