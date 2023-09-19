import React from 'react';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const cartStateValue= useSelector(state=>state.cartPagereducer.value) 
    return (
        <div>
            <h1>Home page : {cartStateValue}</h1>
        </div>
    );
};

export default HomePage;