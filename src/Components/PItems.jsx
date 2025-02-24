import React from 'react'
import { useNavigate } from 'react-router-dom'

function PItems({product}) {
    const {id,name,price}=product
    const navigate=useNavigate();
  return (
    <div>
    <div style={{backgroundColor:"red"}}>
        <h3>Isim: {name}</h3>
        <p>Price:{price}</p>
        <button onClick={()=>navigate("/product-details"+ id)}>Detala git</button>
    </div>
    </div>
  )
}
export default PItems