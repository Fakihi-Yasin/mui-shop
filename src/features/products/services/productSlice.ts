import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from '../data/mockProducts'
interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    category: 'Electronics' | 'Clothing' | 'Accessories' | 'Home & Kitchen',
    rating: number,
    stock: number
}

interface ProductState {
    products: Product[]
}
const initialState: ProductState = {
    products: mockProducts as Product[] 
}


export const prodcuctSlice = createSlice({
    name: 'allproductesSlice',
    initialState,
    reducers: {}
})

export default prodcuctSlice.reducer