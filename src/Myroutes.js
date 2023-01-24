import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer'
import Login from './components/pages/Login'
import FAQ from './components/pages/FAQ'
import About from './components/pages/About'



const Myroutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path= '/' element ={<Home/>}></Route>
    <Route path ='/signin' element ={<Login/>}></Route>
    <Route path ='/faq' element ={<FAQ/>}></Route>
    <Route path ='/about' element ={<About/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Myroutes