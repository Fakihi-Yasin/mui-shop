import { configureStore } from "@reduxjs/toolkit";
import  prodcuctSlice  from "../features/products/services/productSlice";

export const store = configureStore({
 reducer:{
    products : prodcuctSlice
 }
})