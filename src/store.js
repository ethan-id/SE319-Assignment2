import { configureStore } from '@reduxjs/toolkit'
import viewReducer from './reducers/viewSlice';
import productDataReducer from './reducers/productDataSlice';
import filterReducer from './reducers/filterSlice';
import confirmReducer from './reducers/confirmSlice';

export const store = configureStore({
  reducer: {
    view: viewReducer,
    productData: productDataReducer,
    filter: filterReducer,
    confirm: confirmReducer
  },
})