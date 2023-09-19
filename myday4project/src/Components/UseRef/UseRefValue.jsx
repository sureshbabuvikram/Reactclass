import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const UseRefValue = () => {
    const [inputvalue, setInputValue] = useState('');
    const [inputvalue2, setInputValue2] = useState('');
    const myRef = useRef(0);
    // let count = 0;

    const handleChange = (e) => {
        setInputValue(e.target.value);
        myRef.current += 1 //=> myRef.current = myRef.current +1
        // count += 1;
    }
    const handleChange2 = (e) => {
        setInputValue2(e.target.value);
        myRef.current += 1 //=> myRef.current = myRef.current +1
        // count += 1;
    }

    return (
        <div>
            <input type='text' value={inputvalue} placeholder='Enter your value' onChange={handleChange} />
            <input type='text' value={inputvalue2} placeholder='Enter your value' onChange={handleChange2} />
            <div>
                {myRef.current}              
            </div>
        </div>
    );
};

export default UseRefValue;