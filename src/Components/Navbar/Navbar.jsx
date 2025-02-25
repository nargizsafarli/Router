import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GrFavorite } from "react-icons/gr"
import { GrIntegration } from "react-icons/gr";
import "./Navbar.css"
import logo from "./assets/logo-dark.png"

function Navbar() {
    const linkStyle=({isActive})=>({
        textDecoration:"none",
        borderBottom: isActive? "2px solid black" : "none",
        color:isActive? "blue" : "black"
    })
  return (
    <div className='nav'>
        <p>Wishlist</p>
        <div className='nav-link'>
        {["Home","About","Contact"].map((name,index)=>(
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