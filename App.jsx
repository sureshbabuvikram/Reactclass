import React from 'react';
// import Child from './component/Child';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Pagelayout from './component/Pagelayout';
import Cards from './component/Cards';
import Footer from './component/Footer';

const App = () => {
  let a=500;
  let b=1000;
  
  console.log("A  & B",a,b)


const updateValue=(n1,n2)=>{
  a=n1;
  b=n2;
  console.log(a)
  console.log(b)
}

  return (
    <div>
      {a}
      {/* <h1 style={{color:'green'}}>Parent component - css</h1> */}
      <Header a={a} b={b} updateValue={updateValue} />
      <Pagelayout a={a} />
      <Cards a={a} />
      {/* <Footer /> */}
      {/* <Mainpage /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;



