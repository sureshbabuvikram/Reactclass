import React from 'react';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import Child3 from './Components/Child3';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import { useReducer } from 'react';
import ReducerAction from './Components/ReducerAction';

export const myContext= createContext()



const App = () => {
  // const[color, setColor]= useState('blue');
  // const[data, setData]= useState(jsonfile);

  // const jsonfile=[{
  //   lib:{id:1,notes:""},
  //   feed:{notes:""}
  // }]

  // useEffect(()=>{
  //   fetchData();
  // },[])
  // const fetchData=async()=>{
  //   await axios.get("url").then(res=>setData(res.data)).catch(e=>console.log(e))
  // }

  const[state,dispatch]= useReducer(ReducerAction, 0);
  return (
    // <div>
    //   <input type='color' onChange={(e)=>{setColor(e.target.value)}} />
    //   <h1>Parent Comp</h1>
    //   <myContext.Provider value={[data, setData]}>
    //   <Child1  />
    //   <Child2  />
    //   </myContext.Provider>

    //   <myContext.Provider value="pink">
    //   <Child3 />
    //   </myContext.Provider>

    // </div>

    <div>
      <h1>Parent:{state} </h1>
      <myContext.Provider value={{reducerState:state, reducerDispatch:dispatch}} >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </myContext.Provider>
    </div>
  );
};

export default App;