import React from 'react'
import Create from './Components/CreatePage/Create'
import { createBrowserRouter, RouterProvider, Route, Routes,Link, BrowserRouter } from 'react-router-dom'
import Login from './Components/LoginPage/Login'
import Home from './Components/HomePage/Home'
import LandingPage from './Components/LandingPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<LandingPage/>} />
         <Route path='/create' element={<Create/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/home' element={<Home/>} />
       </Routes>
       </BrowserRouter>
    </div>
 )
}

export default App