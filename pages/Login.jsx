import React, { useState,useEffect} from "react";
// import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from 'react-router-use-history'
import {useHistory} from "react";

import { Link } from 'react-router-dom';
// import test from "./test";

const Login = () => {
  const history = useHistory();
  const [errormessage,seterrorMessage]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  function validateForm() {
    return email.length > 0 && password.length > 6;
  }

  React.useEffect(()=>{
		if(localStorage.getItem('auth')) history.push('/login')
	},[]) 


  const handleSubmit=(event)=> {
    event.preventDefault();
    console.log(email,password)
    seterrorMessage("")
    if((email !== "admin@a.com" || password !== "password") && (email !== "admin1@a.com" || password !== "user1234") && (email !== "user1@gmail.com" || password !== "user1234")) return seterrorMessage('Invalid email or password');
    history.push('/');
		localStorage.setItem('auth', true);
    }
  return (
    <div className="Login">
    <h2 className='signin'>Sign In</h2>
      {/* <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="btnlogin">
        
        <Button  block="true" size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button></div>
        <div>
        <h6>Don't have an account? <Link to="/Signup" >Signup</Link></h6>
        </div>
      </Form> */}
    </div>
  );}
export default Login;

