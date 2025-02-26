import React, { useEffect } from 'react'
import "./NotFound.css"
import notFound from "./assets/404.avif"
import { Link } from 'react-router-dom'


function NotFound({setShowNav}) {
    useEffect(()=>{
        setShowNav(false)
        return ()=>setShowNav(true)
    },[setShowNav])
    
  return (
    <div className='found-container'>
     <h1>OOPS....page not found...</h1>
    <Link to={"/"}>
      <button>←BACK HOME PAGE</button>
    </Link>
      <img src={notFound}></img>
    </div>
  )
}

export default NotFound