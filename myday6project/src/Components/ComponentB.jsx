import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const ComponentB = () => {
    const{reducerState,reducerDispatch}=useContext(myContext)
    return (
        <div>
            <h1>Comp B : {reducerState}</h1>
            <button onClick={()=>{reducerDispatch({type:"ADD",payload:5})}}>ADD</button>
            <button onClick={()=>{reducerDispatch({type:"SUB",payload:5})}}>SUB</button>
        </div>
    );
};

export default ComponentB;