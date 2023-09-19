import React from 'react';
import { useReducer } from 'react';
import ReducerAction from './ReducerAction';
import { useState } from 'react';

const UseReducer2 = () => {
    const[state, dispatch]= useReducer(ReducerAction, {count:0}) // ReducerAction({count:0},action )
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={()=>{dispatch({type:"ADD",payload: 5})}}>Add</button>
            <button onClick={()=>{dispatch({type:"SUB", payload:2})}}>Sub</button>

            
        </div>
    );
};

export default UseReducer2;

