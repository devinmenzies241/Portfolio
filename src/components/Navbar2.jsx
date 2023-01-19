import React from "react";
import { useState } from "react";

const Navbar2 = () => {

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY > 5) {
      setColor(true); 
    } else {
      setColor(false);
    }
  }  

  window.addEventListener('scroll', changeColor); 

  return (
    <nav id="navbarID" className={color ? 'navbar sticky-top navbar-scroll nav-link-scroll' : 'navbar sticky-top'}>
      <a className="navbar-brand" href="#app">DM</a>
      <ul className="nav">
        <li className="nav-item">
          <a className={color ? "nav-link nav-link-scroll" : "nav-link"} href="#aboutMe-pg">About Me</a>
        </li>
        <li className="nav-item">
          <a className={color ? "nav-link nav-link-scroll" : "nav-link"} href="#projects-pg">Projects</a>
        </li>
        <li className="nav-item">
          <a className={color ? "nav-link nav-link-scroll" : "nav-link"} href="#contact-pg">Contact</a>
        </li>    
      </ul>
    </nav>
  )
}

export default Navbar2; 