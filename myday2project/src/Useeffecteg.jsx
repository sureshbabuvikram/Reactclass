import axios from 'axios';
import React,{useEffect, useState} from 'react';

const Useeffecteg = () => {
    const[value, setValue]= useState([]);  //nested object map
    //=> class comp->life cycle(M,up,um) -> fun comp-> hooks -> useeffect() -> sideeffect hook
   useEffect(()=>{
        fetchData();     
   },[])  // []=>dependency array -> [] empty -> render -> execute once , [state or props] ->

   const fetchData=async()=>{
        // await fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res=>res.json())
        // .then(data=>setValue(data))
        // .catch(err=>console.log(err))

        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setValue(res.data))
        .catch(err=>console.log(err))
   }

   console.log("fetchdata",value);

//    const handleSubmit=()=>{
//         setValue(val=>val+10)
//    }
    return (
        <div>
            <h1>{value.map((item,index)=>{
                return(
                    <>
                        <div key={index}>
                            <p>{item.id} </p>
                            <p>{item.body} </p>
                            <p>{item.title} </p>

                        </div>
                    </>
                )
            })} </h1>
            {/* <button onClick={handleSubmit}>Click</button> */}
        </div>
    );
};

export default Useeffecteg;