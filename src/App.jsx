import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound'
import Navbar from './Components/Navbar/Navbar'
import ProductPage from './Pages/Product/ProductPage'
import ProductDetails from './Pages/Details/ProductDetails'
import Contact from './Pages/Contact/Contact'



function App() {
  return (
    <div>
  
      <BrowserRouter>
     <Navbar/>
     
        <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='product' element={<ProductPage/>}/>
          <Route path='/product/:id' element={<ProductDetails/>} />
         <Route path='about' element={<About/>}/> 
         <Route path="*" element={<NotFound/>}/>
         <Route path='contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App