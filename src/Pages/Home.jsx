import React from 'react'
import { Button } from '../constants'
import '../Css/Home.css'
function Home() {

  return (
     <>
       <div className="home">
        {/* <Button/> */}
        <div className="home-content">
         <div className="title">
           <h1>Hello I am <span className='name'>Hadeed Tariq</span></h1>
           <p>I am a front end developer working in <span className='passion'>Html || Css || JavaScript and React</span></p>
           <p>I specialize turning design concept into functional, responsive websites and web application</p>
           <button className='cv-btn'>Download Cv</button>
         </div>
         <div className="logo">
          <img src="https://images.pexels.com/photos/12812705/pexels-photo-12812705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
         </div>
        </div>
       </div>
     </>
  )
}

export default Home