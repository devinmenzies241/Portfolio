import React from "react";
import {useState} from 'react'; 

const Footer = () => {

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if(window.scrollY > 10) {  // make sure this is the same as in Navbar2 
      setColor(true); 
    } else {
      setColor(false);
    }
  }  

  window.addEventListener('scroll', changeColor); 

  return (
    <div className={color ? 'container-fluid footer footer-color': 'container-fluid footer'}>    
      <a className='footer-link' href='mailto:devinmenzies@gmail.com'><i className="fa-regular fa-envelope"></i></a>
      <a className='footer-link' href='https://www.linkedin.com/in/devin-menzies-01893671/' target='blank'><i className="fa-brands fa-linkedin"></i></a>
      <a className='footer-link' href='https://github.com/devinmenzies241' target='blank'><i className="fa-brands fa-github"></i></a>
    </div>
  )
}

export default Footer; 