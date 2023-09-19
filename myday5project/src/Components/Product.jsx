import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
             <nav>
            <h1>product Page</h1>
            <Link to='hotproduct'>Hot products</Link>
            <Link to='similarproduct'>Similar products</Link>
        </nav>
        <div>
            <Outlet /> 
        </div>
        </div>
       
    );
};

export default Product;