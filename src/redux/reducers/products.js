import {createSlice} from "@reduxjs/toolkit";

const productsReducer = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productsCount: 0
    },
    reducers: {
        getAllProducts: (state, action) => {
            state.products = action.payload.arr;
            state.productsCount = action.payload.arr.length
        }
    }
});
export default productsReducer.reducer
export const {getAllProducts} = productsReducer.actions;