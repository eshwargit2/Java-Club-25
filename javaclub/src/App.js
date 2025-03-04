import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import logo from './images/java-skillbee-logo copy.png'
import banner from './images/VMKVEC-LOGO.jpg'

import './App.css'
import About from "./About";
import Event from "./Event";



// modefid
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';




function App() {
  return (
    <div >
      <div className="banner">
        <img src={banner} alt="" />
      </div>
   <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <div className="logo">
    <img src={logo} alt="..."  />
    </div>
  
    <button id="join">Join Us</button>
    <button class="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
      <ul class="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><a href="#contact" class="cta-button">Join Us</a></li>
            </ul>
      </div>
    </div>
  </div>
 
  
</nav>



   
          
      <div className="router" >
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/about" element={<About/>} />
         <Route path="/events" element={<Event/>}/>
         <Route path="/Projects" element={<Projects/>}/>
         <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      
      </div>



     
   
    </div>
  );
}

export default App;
