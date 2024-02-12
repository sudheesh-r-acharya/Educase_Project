import React, { useState } from 'react'
import './Create.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





/////////////////////////////////////////////////Frontend/////////////////////////////////////////////////

const Create = () => {
  
  
  
  const [formdata, setformdata] = useState({
    fullname : '',
    phonenumber : '',
    email : '',
    password : '',
    companyName : '',
    choice : ''
  })
  const [errors, seterrors] = useState({})
  
  
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
    axios.post( 'https://educase-backend.onrender.com/create', formdata)
    .then(result => {
        // console.log(result);
        if(result.data === "Already registered"){
            alert("E-mail already registered! Please Login to proceed.");
            navigate('/login');
        }
         else{
          if(formdata.fullname == '' && formdata.email =='' && formdata.password === ''){
            alert("Fill atleast the requiired information")
          }
          else{
            alert("Registered successfully! Please Login to proceed.");
            navigate('/login');

          }
          }
        
    })
    .catch(err => console.log(err));
  }

 
  return (
    <>
    <div className='Createbox' >
     <h1>Create your PopX account</h1>

     <form action="/createUser" onChange={ChangeHandler} >

     <input type="text" name="fullname" id="fullname" className="Input" required  />
     

     <div className='placeholder' id='phname' >Full name</div>
     <span className='star' id='namestar'>*</span>

     <input type="tel"  name="phoneNumber" id="phoneNumber" className="Input"  />

     <div className='placeholder' id='phphonenumber' >Phone number</div>
     <span className='star' id='phnostar'>*</span>

     <input type="email"  name="email" id="email" className="Input"  />

     <div className='placeholder' id='phemail' >Email address</div>
     <span className='star' id='emailstar'>*</span>

     <input type="password"  name="password" id="password" className="Input"  />

     <div className='placeholder' id='phpassword' >Password</div>
     <span className='star' id='passtar'>*</span>

     <input type="text"  name="companyName" id="companyName" className="Input"  />
     <div className='placeholder' id='phcompanyname' >Company name</div>

     <span className='Choice' >
     <h5>Are you an Agency?</h5>
     <span className='star' id='choicestar'>*</span>
     <label>
     <input type="radio" name="choice" className='radio' id='yes' value='Yes'  />
      Yes
     </label>
     <label>
     <input type="radio" name="choice" className='radio' id='no' value='No'  />
      No
     </label>
     </span>

     </form>

     <button id='Formbtn' onClick={Sumbithandler} >Create Account</button>
     


    </div>
    </>
  )
}

export default Create