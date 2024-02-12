import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
    <main>
    <div>
     <div className='Mainbox' >
     <h1>Welcome to PopX</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     <Link to='/create' >
     <button id='btn1'>Create Account</button>
     </Link>
     <Link to='/login' >
      <button id='btn2' >Already Register? Login</button>
     </Link>
     </div>
    </div>
    </main>
    </div>
  )
}

export default LandingPage