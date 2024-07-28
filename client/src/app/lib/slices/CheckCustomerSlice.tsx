import { createSlice } from "@reduxjs/toolkit";

interface IState {
    isOpen: boolean;
}

const initialState: IState = {
    isOpen: false
};

const checkRegisterSlice = createSlice({
    name: 'signModal',
    initialState,
    reducers: {
        openModal(state) {
            state.isOpen = true;
        },
        closeModal(state) {
            state.isOpen = false;
        }
    }
});

export default checkRegisterSlice.reducer;
export const { openModal, closeModal } = checkRegisterSlice.actions;
