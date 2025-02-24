import React from 'react'
import "./Home.css"
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (
    <div className='Home-container'>
    <div className='home-items'>
      <p>velvet beauty</p>
      <h1>Oiginal style</h1>
      <span>
        At vero eos es accosamus et iouso odio disgnission ducimus qiu blanditiss
        praesenttuis voluptaous delentie at corrupte quess dolours te quas
      </span>
     <button onClick={()=>navigate("product")}>view product</button>
    </div>
    <Outlet/>
    </div>
  )
}

export default Home