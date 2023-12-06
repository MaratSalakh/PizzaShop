import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice.js'
import modalReducer from './modalSlice.js'

export default configureStore({
  reducer: {
    products: productsReducer,
    modalState: modalReducer,
  },
});
