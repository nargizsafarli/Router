import React, { useState } from 'react'
import "./Contact.css"
import contactLogo from "./assets/logo_white.png"
import footer from "./assets/footer-img-1.png"
import contactLogo2 from "./assets/m-h-slider-img-6 (1).png"


function Contact() {
    const [email, setEmail] = useState("");
    const [text,setText]=useState("")
    const [errors, setErrors] = useState({});
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
    const validate = () => {
        let newErrors = {};
       let isValid=true;

       if (!email || !emailRegex.test(email)) {
        newErrors.email = "Email must be a valid Gmail address (e.g. example@gmail.com)";
        isValid=false
      }
      setErrors(newErrors);
      return isValid
    }
    const handleSubmit = () => {
        if (!validate()) return;
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            email,
            text
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) =>{
            console.log(json)
            alert("Uğurla qeydiyyatdan keçdiniz!"); 
            resetForm();
          });
        
      };
      const resetForm = () => {
        setEmail("");
        setText("")
        };
    


  return (
    <div className='contact-container'>
        <div className='contact-img'>
            <p>Contact us</p>
        </div>
        <div className='contact-country'>
         <div className='countr-items'>
            <h3>Zurich</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items' >
            <h3>Paris</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items'>
            <h3>London</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
         <div className='countr-items'>
            <h3>Milano</h3>
            <p>Adress:Seestrasse 21, Zurich</p>
             <p>E-mail: biagiottitheme@gmail.com</p>
            <p>Phone : + 99 411 725 39 12</p>
         </div>
        </div>

        <div className='contact-form'>
           <div className='text'>
           <img src={contactLogo2}/>
            <p>Ask us anything</p>
            <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</span>
           </div>
            <div className='form'>
              <input type='email' placeholder='Email' value={email}
                 onChange={(e) => setEmail(e.target.value)}
              />
              <span className='error'>{errors.email}</span>
              <textarea type='textarea' placeholder='Your comment'  className='textInput' value={text}
                 onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleSubmit} className='submit'>Submit</button>
            </div>
            
        </div>
        
        <div className='contact-text'>
            <img style={{width:"180px"}} src={contactLogo}/>
            <div className='text-items'>
                <div className='item'>
                <h2>Contact</h2>
                <span>Adress:Seestrasse 21, Zurich</span>
                <span>E-mail: biagiottitheme@gmail.com</span>
                <span>Phone : + 99 411 725 39 12</span>
                </div>

                <div  className='item'>
                <h2 style={{height:"30px"}}></h2> 
                <span>An oasis of online beauty built specifically so your new cosmetics site can take everyone’s breaths away.</span>
                <div>
                    <div className='footer'>
                       <img src={footer}/>
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