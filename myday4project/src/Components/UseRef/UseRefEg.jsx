import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const UseRefEg = () => {
    const myRef = useRef();
    useEffect(()=>{
        myRef.current.focus();
    },[])
    
    return (
        <div>
            <h1>useref</h1>
            <input type='text' ref={myRef} placeholder='Email' />
            <div>
                <input type='text' placeholder='Password' />
            </div>
        </div>
    );
};

export default UseRefEg;