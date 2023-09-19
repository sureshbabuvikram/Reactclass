import {createSlice} from '@reduxjs/toolkit'

const cartSlice= createSlice({
    name:'cart',
    initialState:{value:0},
    reducers:{
        ADD:(state,action)=>{  
            state.value += action.payload
        },
        SUB:(state,action)=>{
            state.value -= action.payload
        }
    }
})

export const{ADD, SUB}= cartSlice.actions;

export default cartSlice.reducer;