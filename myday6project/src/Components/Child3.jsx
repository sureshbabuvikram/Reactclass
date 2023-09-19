import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const Child3 = () => {
    const child3bgClor= useContext(myContext)
    return (
        <div style={{backgroundColor:child3bgClor}}>
            <h1>Child-3</h1>
        </div>
    );
};

export default Child3;