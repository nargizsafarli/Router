import React from 'react'
import "./About.css"
import clientimg from "./assets/m-h-client-5.png"
import card1 from "./assets/m-h-blog-img-1-600x868.jpg"
import card2 from "./assets/m-h-blog-img-2-600x868.jpg"
import card3 from "./assets/m-h-blog-img-3-600x868.jpg"
import card4 from "./assets/m-h-blog-img-4-600x868.jpg"

function About() {
  return (
    <div>
    <div className='about-bg'>
      <h2>TESMIMONALIAS</h2>
      <span>I would go to cosmetics country and buy two or three foundation and powder,and then go
      home and, and mix them before  i came up with something  suitable for my undertones
      </span>
      <img src={clientimg}></img>
    </div>
    
     <div className='about-text'>
     <div className='card-text'>
      <h1>FIND YOUR BEAUTY MATCH</h1>
      <span>At vero eos et accusamus et iusto</span>
     </div>
     <div className='card-items'>
      <div className='about-card'>
       <div className='img-div'><img src={card1}/></div> 
        <span>Lipstick-By Janny Joe</span>
        <h3>Prep a good primer</h3>
        <p>Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ....</p>
      </div>
      <div className='about-card'>
      <div className='img-div'><img src={card2}/></div>
        <span>Lipstick-By Janny Joe</span>
        <h3>Prep a good primer</h3>
        <p>Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ....</p>
      </div>
      <div className='about-card'>
      <div className='img-div'> <img src={card3}/></div>
        <span>Lipstick-By Janny Joe</span>
        <h3>Prep a good primer</h3>
        <p>Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ....</p>
      </div>
      <div className='about-card'>
      <div className='img-div'> <img src={card4}/></div>
        <span>Lipstick-By Janny Joe</span>
        <h3>Prep a good primer</h3>
        <p>Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et ....</p>
      </div>
      </div>

     </div>
    </div>

  )
}

export default About