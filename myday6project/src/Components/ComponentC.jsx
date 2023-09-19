import React from 'react';
import { useContext } from 'react';
import { myContext } from '../App';

const ComponentC = () => {
    const{reducerState, reducerDispatch}= useContext(myContext)
    return (
        <div>
            <h1>Comp C :{reducerState} </h1>
            <button onClick={()=>{reducerDispatch({type:"ADD",payload:10})}}>ADD</button>
            <button onClick={()=>{reducerDispatch({type:"SUB",payload:10})}}>SUB</button>
        </div>
    );
};

export default ComponentC;