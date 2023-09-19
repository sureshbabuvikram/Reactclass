import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const Child1 = () => {
    const [child1bgColor, setColor]= useContext(myContext);
    return (
        <div style={{backgroundColor:child1bgColor}}>
            <h1>Child1</h1>
        </div>
    );
};

export default Child1;