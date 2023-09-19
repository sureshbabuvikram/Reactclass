import React from 'react';
import { useState } from 'react';

const FormValidation = () => {
    const[formValue, setFormValue]=useState({userName:'', password:''})

    const handleSubmit=(e)=>{
        e.preventDefault() //validation
        console.log(" Form values",formValue);    
      
    }

    const handleChange=(e)=>{
        const{name, value}= e.target   
        setFormValue({...formValue,[name]:value })   //spread operator ...-> rest operator ...

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
             <input type='text' name='userName' placeholder='Username' value={formValue.userName} onChange={handleChange} />
               <input type='text' name='password' placeholder='password' value={formValue.password}  onChange={handleChange} />

                <button type='submit'>Login</button>


            </form>

            
            <div>
                    {formValue.userName}
                </div>
            
                <div>
                    {formValue.password}
                </div>
        </div>
    );
};

export default FormValidation;