import { createSlice } from '@reduxjs/toolkit';

const ProductsReducer = createSlice({
    name: "products",
    initialState:{
        allProducts:[],
        allDetails:[],
        allCart:[],
        quantity:0
    },
    reducers:{
        AddProducts:(state, action)=>{
            state.allProducts=action.payload
        },
        AddDetails:(state, action)=>{
            state.allDetails.push(action.payload)
        },
        AddCart:(state, action)=>{
            const find = state.allCart.findIndex(item=>item.id===action.payload.id);
            if(find>=0){
                state.allCart[find].quantity +=1
            }else{
                const tempvalue = {...action.payload, quantity:1}
                state.allCart.push(tempvalue)
            }
        },
    }
})

export const { AddProducts, AddDetails,AddCart } = ProductsReducer.actions;
export default ProductsReducer.reducer;


