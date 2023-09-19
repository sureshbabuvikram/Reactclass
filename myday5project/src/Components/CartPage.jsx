import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate= useNavigate();

    const handleClick=()=>{
        navigate('/');
        
    }
    return (
        <div>
            <h1>Cart Page</h1>
            <button onClick={handleClick}>Home Page</button>
        </div>
    );
};

export default CartPage;