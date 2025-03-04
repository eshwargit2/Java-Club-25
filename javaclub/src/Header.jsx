import React from 'react'
import './Header.css'
import code1 from './images/coding.jpg'
import code2 from './images/coding2.jpg'
import code3 from './images/code3.jpg'
import Footer from './Footer'
import learn from './images/Why-is-it-important-to-teach-your-child-coding-from-an-early-age-removebg-preview.png'



const Header = () => {
  return (
    <div style={{height:'100vh'}} >
      
     <div className="home">
      <div className="container">
        <div className="row">
        {/* <div className="col-12 side1-img" >
           <img src={code1} alt="..." />
          </div> */}
          <div className="col-12 col-md-3 mt-5">
          <img src={learn} alt="" className='mt-4' />
           
          </div>
          <div className="col-12 col-md-9  title mt-3">

          <h1 className="mt-5 typing"><span>M</span>aster <span>J</span>ava <br /> with Javaskill Bee</h1>
          <p className="animate-fade">Join a community of passionate learners building real-world projects.</p>
          </div>
          {/* <div className="col-12 side2-img" >
          
          </div> */}
        
        </div>
      </div>
     </div>
   <Footer/>
    </div>

  )
}

export default Header