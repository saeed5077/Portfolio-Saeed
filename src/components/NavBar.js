import React from 'react'
import { useState,useEffect } from 'react';
import {Container,Navbar,Nav} from 'react-bootstrap';

import logo from "../assets/img/saeed-high-resolution-logo-color-on-transparent-background.png"
import navIcon1 from "../assets/img/nav-icon1.svg"

import navIcon3 from "../assets/img/nav-icon3.svg"
import github from "../assets/img/icons8-github.svg"

function NavBar() {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);

 useEffect(()=>{
   const onScroll = ()=>{
    if(window.scrollY > 50)
        setScrolled(true);
    else
        setScrolled(false);   
   }

   window.addEventListener("scroll",onScroll);

   return ()=>window.removeEventListener("scroll",onScroll);
 })

 const onUpdateActiveLink =(name)=>{

    setActiveLink(name);

 }

  return (
   
        <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
          <Container>

            <Navbar.Brand  href="#home" >
              <img  src={logo} alt="logo" />                
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home'?"active navbar-link":"navbar-link" } onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills'?"active navbar-link":"navbar-link" } onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'projects'?"active navbar-link":"navbar-link" } onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav> 
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/saeed-anwar-ansari-516679232/" target='blank'><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/saeed5077" target="blank"><img src={github} alt="" /></a>
                    <a href="https://www.instagram.com/i.saeed24/"><img src={navIcon3} alt="" /></a>

                </div>
               <a href="https://drive.google.com/file/d/1oAZHhP25gs9Poh10KTwhLchDf2nOaU_k/view?usp=share_link" download="Saeed Resume">
               <button className="vvd"><span>Download CV</span></button>
               </a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    
       
  )
}

export default NavBar   