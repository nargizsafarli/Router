import React from 'react'
import "./Home.css"
import { Outlet, useNavigate } from 'react-router-dom'
import velvet from "./assets/m-h-slider-img-6 (1).png"
function Home() {
  const navigate=useNavigate()
  return (
    <div className='Home-container'>
    <div className='home-items'>
     <img src={velvet}/>
      <h1>Original style</h1>
      <span>
        At vero eos es accosamus et iouso odio disgnission ducimus qiu blanditiss
        praesenttuis voluptaous delentie at corrupte quess dolours te quas
      </span>
     <button onClick={()=>navigate("product")}>View product</button>
    </div>
    <Outlet/>
    </div>
  )
}

export default Home