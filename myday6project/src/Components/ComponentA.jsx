import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const ComponentA = () => {
    const {reducerState,reducerDispatch}= useContext(myContext)
    return (
        <div>
            <h1>Comp A :{reducerState }</h1>
            <button onClick={()=>{reducerDispatch({type:"ADD",payload:2})}}>ADD</button>
            <button onClick={()=>{reducerDispatch({type:"SUB",payload:2})}}>SUB</button>
        </div>
    );
};

export default ComponentA;