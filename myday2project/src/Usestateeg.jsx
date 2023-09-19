import React, { useState } from 'react';

const Usestateeg = () => {
    const [data, setData] = useState(10);   //return two things: current value= 1st parameter 2nd-> update the current value using function
    const [value, setvalue] = useState([1, 2, 3, 4, 5])
    const [arrObj, setArrObj] = useState([
        { id: 1, name: "suresh", exp: 10 },
        { id: 2, name: "rithu", exp: 1 },
        { id: 3, name: "vidhya", exp: 5 },
        { id: 4, name: "mohan", exp: 15 }
    ])
    const handleSubmit = () => {
        setData(data => data + 1) //=> 11=>111+1 =12 => setData(12) //state management // rerender
    }
    return (
        <div>
            {data}
            <div>
                <button onClick={handleSubmit}>Click</button>
            </div>
            <div>
                {value.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <h3>{item} </h3>
                            </div>
                        </>
                    )
                })}
            </div>

            <div>
                {arrObj.map((item,index)=>{
                    return(
                        <>
                            <div key={index}>
                                <h3>ID:{item.id} </h3>
                                <h3>NAME:{item.name} </h3>
                                <h3>EXPERIENCE:{item.exp} </h3>

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Usestateeg;