import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { mockAction } from '../Features/mockAction';

const ProductPage = () => {
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(mockAction())
    },[])
    const productStateValue= useSelector(state=>state.mockApiReducer.value)
    const productStateIsLoading= useSelector(state=>state.mockApiReducer.isLoading)

    // console.log("productStateValue", productStateValue);
    // console.log("productStateIsLoading", productStateIsLoading);
    return (
        <div>
            <h1>product page</h1>
            
            {productStateIsLoading?

            productStateValue.map((item,index)=>{
                return(
                    <>
                    <div key={index}>
                        <div>{item.name} </div>
                        <div>{item.id} </div>
                    </div>
                    </>
                )
            })
        :"Loading....."}
        </div>
    );
};

export default ProductPage;