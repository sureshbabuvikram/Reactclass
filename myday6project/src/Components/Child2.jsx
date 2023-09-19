import React from 'react';
import Child2Child from './Child2Child';
import { useContext } from 'react';
import { myContext } from '../App';

const Child2 = () => {
    const [child2bgColor,setColor]= useContext(myContext)
    return (
        <div style={{backgroundColor:child2bgColor}}>
            <h1>Child2</h1>
            <Child2Child />
        </div>
    );
};

export default Child2;