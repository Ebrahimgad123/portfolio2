import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Projects from './Component/Projects'
const AppContent = () => {
  return (
    <>
     <BrowserRouter> 
     <Navbar/>
     <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/projects'element={<Projects/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default AppContent