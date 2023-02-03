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

  const [hover1, setHover1] = useState(false); 
  const [hover2, setHover2] = useState(false); 
  const [hover3, setHover3] = useState(false); 
  const [hover4, setHover4] = useState(false);

  return (
    <div className={color ? 'container-fluid footer footer-color': 'container-fluid footer'}>
      <a 
        className='footer-link' 
        href='mailto:devinmenzies@gmail.com' 
        target='_blank'
        onMouseEnter={()=> setHover1(true)} 
        onMouseLeave={()=> setHover1(false)}>
        <i className={`fa-regular fa-envelope ${hover1 ? 'fa-bounce' : '' }`}></i>
      </a>
      <a 
        className='footer-link' 
        href='https://docs.google.com/document/d/e/2PACX-1vQpYfn9y0OXR81iPTQllsZqNtI6qqIZobnlNpB5bhYGw0DhHaCbAvK38HgW7OcsU8O4brJNo-NgF__k/pub' 
        target='_blank'
        onMouseEnter={()=> setHover2(true)} 
        onMouseLeave={()=> setHover2(false)}>
        <i className={`fa-regular fa-file ${hover2 ? 'fa-bounce' : '' }`}></i>
      </a>
      <a 
        className='footer-link' 
        href='https://www.linkedin.com/in/devin-menzies-01893671/' 
        target='_blank'
        onMouseEnter={()=> setHover3(true)} 
        onMouseLeave={()=> setHover3(false)}>
        <i className={`fa-brands fa-linkedin ${hover3 ? 'fa-bounce' : '' }`}></i>
      </a>
      <a 
        className='footer-link' 
        href='https://github.com/devinmenzies241' 
        target='_blank'
        onMouseEnter={()=> setHover4(true)} 
        onMouseLeave={()=> setHover4(false)}>
        <i className={`fa-brands fa-github ${hover4 ? 'fa-bounce' : '' }`}></i></a>
    </div>    
  )
}

export default Footer; 