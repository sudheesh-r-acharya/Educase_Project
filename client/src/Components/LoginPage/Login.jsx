import React, { useState } from  'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

 const [formdata, setformdata] = useState({
  email : '',
  password : '',
 })
  
  const navigate = useNavigate();
  const ChangeHandler = (e) => {
    console.log(e.target.value,e.target.name)
    setformdata({
      ...formdata,
      [e.target.name] : e.target.value
    })
  }

  const Sumbithandler = async(e) =>{
    e.preventDefault()
    await axios.post('http://127.0.0.1:3001/login',formdata)
    .then(result => {
      // console.log(result);
      if(result.data === "Success"){
          // console.log("Login Success");
          // alert('Login successful!')
          navigate('/home');
      }
      else{
          alert('Incorrect password! Please try again.');
      }
  })
  .catch(err => console.log(err));
  }
  return (

  
    <>
    
      <div className='Loginbox'>
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <form action="" onChange={ChangeHandler} >
      <input type="email"  name="email" id="Loginemail" placeholder="Enter email address" />
      <div className='placeholder' id='Loginphemail' >Email address</div>
      <input type="password"  name="password" id="Loginpassword" placeholder='Enter password' />
      <div className='placeholder' id='Loginphpassword' >Password</div>
  

      </form>
      <button className='Loginbtn' onClick={Sumbithandler} >Login</button>
      


      </div>
    </>
  )
}

export default Login