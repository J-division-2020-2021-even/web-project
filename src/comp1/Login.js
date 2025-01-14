import React from 'react'
import './style.css'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const [Values,setdata]=useState({
        usn:"",
        password:"",
        })
const navigate = useNavigate();
        
const setVal=(event)=>{
    // const {name,value} = e.target;
    const name=event.target.name;
    const value = event.target.value;
    // event.preventDefault();
  
    // setdata({...data,[name]:value})
    setdata((prev)=>{
      return{...prev,[name]:value}
    })
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    // console.log(Values.usn);
    // console.log(Values.password);
    let result = await fetch('http://localhost:4000/login',{
    method:"post",
    body:JSON.stringify({usn:Values.usn,password:Values.password}),
    headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
      },
});
result = await result.json();
console.log(result)

if(result.usn){
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/dashboard')
}else{
    alert("please enter correct details")
}
  }
    return(
        <>
      
        <div className="login">
            <h2>Login</h2>
            <input className="inputBox" type="text" name="usn" value={Values.usn} onChange={setVal} placeholder="ENTER USN ID"/>
            <input className="inputBox" type="password" name="password"  value={Values.password}  onChange={setVal}placeholder="ENTER PASSWORD"/>
            <button onClick={handleSubmit} className="signup-btn" type='button'>Login</button>
        </div>
    </>
    )
}
export default Login;