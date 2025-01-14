import React from 'react'
import './style.css';
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

    const [Values,setdata]=useState({
        name:"",
        usn:"",
        password:"",
        })

        const navigate = useNavigate();
    

        useEffect(()=>{
            const auth = localStorage.getItem('user');
            if(auth)
            {
                navigate('/')
            }
        })

        const setVal=(event)=>{
            // const {name,value} = e.target;
            const name=event.target.name;
            const value = event.target.value;
            // event.preventDefault();
          
            // setdata({...data,[name]:value})
            setdata((prev)=>{
              return{...prev,[name]:value}
            })
            // console.log(setValues);
          }


          const handleSubmit =async (e)=>{
            e.preventDefault();
            // console.log(Values.name);
            // console.log(Values.usn);
            // console.log(Values.password);
            let result = await fetch("http://localhost:4000/register",{
                method:"post",
                headers:{
                  "Content-Type":"application/json",
                  "Access-Control-Allow-Origin":"*",
                },
                body:JSON.stringify({name:Values.name,usn:Values.usn,password:Values.password}),
              })
              result= await result.json()
              // console.log(result.success)
              .then((data)=>{
                console.log(data,"user register");
                localStorage.setItem("user",JSON.stringify(data));
                if(data)
                {
                  alert("Registration successfully");
                  navigate('/')
                }
            });
          }




    
  return (
    <>
    <div className='register'>
        <h1>Register</h1>
        <input className='inputBox' name="name" type="text" onChange={setVal} placeholder='enter name' value={Values.name}/>
        <input className='inputBox' name="usn" type="text"  onChange={setVal} placeholder='enter usn id' value={Values.usn} />
        <input className='inputBox' name="password" type="password"  onChange={setVal} placeholder='enter password' value={Values.password} />
        <button  onClick={handleSubmit} className="signup-btn" type='button'>Sign Up</button>
    </div>

    </>
  )
}

export default SignUp