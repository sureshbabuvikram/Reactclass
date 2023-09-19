import React from 'react';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import axios from 'axios'
import { useState } from 'react';
import { fetchData, loading } from '../Features/mockSlice';

const ProductFetchPage = () => {
    const[values, setValue]= useState([]);
    const URL="http://jsonplaceholder.typicode.com/users"
    const dispatch= useDispatch();
    
    useEffect(()=>{
        getData();
    },[])

    const getData=async()=>{
        await axios.get(URL).then(res=>setValue(res.data)).then(console.log(values)).catch(e=>console.log(e))
    }

    // console.log("Values", values);

    return (
        <div>
            <h1>Product Fetch page</h1>
            <button onClick={()=>{dispatch(fetchData(values))}}>Fetch Data</button>
            <button onClick={()=>{dispatch(loading())}}>Isloading</button>
        </div>
    );
};

export default ProductFetchPage;