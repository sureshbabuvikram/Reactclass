import React from 'react';
import { useState } from 'react';

const MouseOverOut = () => {
    const[dataColor, setDataColor]= useState(false);
    const divStyle= {
        color: dataColor?'blue':'red'
    }
    const handleMouseOver=()=>{
        setDataColor(true)
    }
    const handleMouseout=()=>{
        setDataColor(false)
    }

    return (
        <div style={divStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseout} > 
            <h1>Suresh</h1>
        </div>
    );
};

export default MouseOverOut;