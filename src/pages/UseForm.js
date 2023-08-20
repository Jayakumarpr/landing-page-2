import React, { useState } from 'react'

const UseForm = (validate) => {
    const initialValues = { username: "", email: "", password: "",password2:""};
   const [values,setValues]= useState(initialValues);
   const [data,setdata]= useState([]);
   const [errors,setErrors]=useState({});
   const handlechange=(e)=>{
    const {name,value}=e.target;
    setValues({...values, [name]:value }); 
  };
  const { username, email,password,password2 } = values;
  const handleSubmit=(e)=>{
    e.preventDefault();
    setErrors(validate(values))
    setdata([...data, { username, email,password,password2 }]);
    setValues(initialValues)
    
  }
  console.log(data)
  return {handlechange,values,handleSubmit,errors}
};
export default UseForm
