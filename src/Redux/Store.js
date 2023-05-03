import { configureStore } from '@reduxjs/toolkit';
import ProductsReducer from './ProductsReducer';

const Store = configureStore({
    reducer:{
        ProductsReducer
    }
})

export default Store;

