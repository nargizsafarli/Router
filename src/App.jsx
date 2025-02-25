import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/Product/ProductPage'
import ProductDetails from './Pages/Details/ProductDetails'
import Contact from './Pages/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Navbar from './Components/Nav/Navbar'

function App() {
  const [showNav,setShowNav]=useState(true)
  return (
    <div>
      <BrowserRouter>
    {showNav && <Navbar/>} 
        <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='product' element={<ProductPage/>}/>
          <Route path='/product/:id' element={<ProductDetails/>} />
         <Route path='about' element={<About/>}/> 
         <Route path="*"  element={<NotFound setShowNav={setShowNav}/>}/>
         <Route path='contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App