import React from 'react'
import './style.css'
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const addhealth= () => {
        navigate("/addhealthdetails");
    }

  return (
    <>
   <center>
    <h2 className='title1'>WELCOME TO KLE TECH CLINIC {JSON.parse(auth).name} </h2>
    <div className='add'> 
    <button className="health"onClick={addhealth}>Click Here to add health details</button>
    </div>
    </center>
    </>
  )
}

export default Dashboard