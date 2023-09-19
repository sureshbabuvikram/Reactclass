import React from 'react';
import { useState } from 'react';

const OnClickEvent = () => {
    const[data, setData]= useState(0);
    const handleClick=()=>{
        setData(val=>val+1)
        console.log(data);
    }
    return (
        <div>
            <button onClick={handleClick} >Click</button>
            <div>{ data}</div>
        </div>
    );
};

export default OnClickEvent;