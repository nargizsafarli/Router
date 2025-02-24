import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact-img'>
            {/* <p>Contact us</p> */}
            <img src='./assets/logo-dark.png'></img>
        </div>
        <div className='contact-country'>
         <div className='countr-items'>
            <h3>Zurich</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items' >
            <h3>Zurich</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items'>
            <h3>Zurich</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items'>
            <h3>Zurich</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
        </div>
        <div className='contact-text'>
            <h3>biagivit</h3>
            <div className='text-items'>
                <div className='item'>
                <h2>Contact</h2>
                <span>Adress:Seestrasse 21, Zurich</span>
                <span>E-mail: biagiottitheme@gmail.com</span>
                <span>Phone : + 99 411 725 39 12</span>
                </div>

                <div  className='item'>
                <h2>About</h2> 
                <span>An oasis of online beauty built specifically so your new cosmetics site can take everyone’s breaths away.</span>
                <div>
                    <div>
                        icon
                    </div>
                </div>
                </div>
                <div  className='item'>
                <h2>Collection</h2> 
                <span>Glowing skin is a result ABCDE beauty-forever young</span>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact