import { IFilter } from "@/app/interfaces/Filter";
import { createSlice } from "@reduxjs/toolkit";

const initialState:IFilter = {
    category: [],
    price: [0, 5000],
    color: [],
    style: [],
    size: [],
    sizeForCart: "",
    gender: ''
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action) { state.category = [...state.category, action.payload] },
        removeCategory(state, action) { state.category = state.category.filter(category => category !== action.payload) },

        setPrice (state, action) { state.price = action.payload },

        setColor (state, action) { state.color = [...state.color, action.payload] },
        removeColor(state, action) { state.color = state.color.filter(color => color !== action.payload) },

        setStyle (state, action) { state.style.push(action.payload) },
        removeStyle (state, action) { state.style = state.style.filter(style => style !== action.payload) },

        setSize (state, action) { state.size.push(action.payload) },
        removeSize (state, action) { state.size = state.size.filter(size => size !== action.payload) },

        setGender (state, action) { state.gender = action.payload },

        chooseSize(state, action) { state.sizeForCart = action.payload},
        removeSizeChoice(state) { state.sizeForCart = ""},

        clearFilter (state) {
            state.category = [],
            state.price = [0, 5000],
            state.color = [],
            state.style = [],
            state.size = [],
            state.sizeForCart = "",
            state.gender = ''
        }
    }
})

export default FilterSlice.reducer
export const {
    setCategory, removeCategory, 
    setPrice, 
    setColor, removeColor, 
    setStyle, removeStyle,
    setSize, removeSize,
    setGender, 
    chooseSize, removeSizeChoice,
    clearFilter
} = FilterSlice.actions