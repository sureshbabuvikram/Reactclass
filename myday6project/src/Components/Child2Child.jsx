import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const Child2Child = () => {
    const [child2childbgColor,setColor]= useContext(myContext)
    return (
        <div style={{backgroundColor:child2childbgColor}}>
            <h3>Child2Child</h3>
            <button onClick={()=>{setColor("red")}}>Color Change</button>
        </div>
    );
};

export default Child2Child;