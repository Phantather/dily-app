import {  configureStore } from '@reduxjs/toolkit'
import user from "./reducers/user"
import products from './reducers/products'

const store = configureStore({
    reducer: {
        user,
        products
    }
});

export default store