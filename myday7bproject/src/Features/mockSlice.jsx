import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[],
    isLoading:false
}
const mockSlice= createSlice({
    name:'mock',
    initialState,
    reducers:{
        loading:(state, action)=>{
            state.isLoading= true
        },
        fetchData:(state, action)=>{
            state.value= action.payload //API res
            state.isLoading= true
        }
    }
})

export const{loading, fetchData}=mockSlice.actions;
export default mockSlice.reducer;