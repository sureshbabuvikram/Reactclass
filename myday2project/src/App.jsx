import React from 'react';
import Child from './Child';
import Usestateeg from './Usestateeg';
import Useeffecteg from './Useeffecteg';

const App = () => {  
  let arr=[1,2,3,4,5]
  let arrObj=[
    {id:1,name:"suresh",exp:10},
    {id:2,name:"rithu",exp:1}
  ]  
  return (
    <div>

      {/* <Child arr={arr} arrObj={arrObj} /> */}
      {/* <Usestateeg /> */}
      <Useeffecteg />
    </div>
  );
};

export default App;