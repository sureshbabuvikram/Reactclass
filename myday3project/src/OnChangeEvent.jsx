import React from 'react';
import { useState } from 'react';

const OnChangeEvent = () => {
    const[data, setData]=useState('');

    const handleChange=(e)=>{
       setData(e.target.value); //suresh
    }

    return (
        <div>
            <input type='text'  value={data} onChange={handleChange} /> 

            <div>inputdata: {data} </div>
        </div>
    );
};

export default OnChangeEvent;