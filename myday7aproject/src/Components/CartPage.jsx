import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD, SUB } from '../Features/cartSlice';

const CartPage = () => {
    const dispatch= useDispatch();
    return (
        <div>
            <h1>Cart Page</h1>
            <button onClick={()=>{dispatch(ADD(1))}}>ADD</button>
            <button onClick={()=>{dispatch(SUB(1))}}>SUB</button>
        </div>
    );
};

export default CartPage;