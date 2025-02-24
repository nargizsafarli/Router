import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr"
import { GrIntegration } from "react-icons/gr";
import "./Navbar.css"

function Navbar() {
    const linkStyle=({isActive})=>({
        textDecoration:"none",
        borderBottom: isActive? "2px solid black" : "none",
        color:isActive? "blue" : "black"
    })
  return (
    <div className='nav'>
        <p>Wishlish</p>
        <div className='nav-link'>
        {["Home","About","contact"].map((name,index)=>(
            <NavLink key={index} to={ name ==="Home"? "/" : `/${name}`} style={linkStyle} >{name}</NavLink>
        ))}
        </div> 
        <div className='nav-icons'>
        <GrFavorite />
        <GrIntegration />
        </div>
    </div>
  )
}

export default Navbar