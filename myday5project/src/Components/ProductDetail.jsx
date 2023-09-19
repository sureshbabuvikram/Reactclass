import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate= useNavigate();
    return (
        <div>
            <h1>product Detail page</h1>
            <button onClick={()=>{navigate('/cartpage')}}> Go to Cart</button>

        </div>
    );
};

export default ProductDetail;