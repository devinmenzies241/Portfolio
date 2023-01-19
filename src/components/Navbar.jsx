import React from 'react'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react'; 

function BasicNavbar() {

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
    <Navbar sticky='top' className={color ? 'navbar navbar-scroll' : 'navbar'}>
      <Navbar.Brand href="/" className='navbar-brand'>DM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* <Nav.Link className={color ? 'nav-item-scroll' : 'nav-item'} href='#app'><i class="fa-solid fa-house"></i></Nav.Link> */}
          <Nav.Link className={color ? 'nav-item-scroll' : 'nav-item'} href='#aboutMe-pg'>About Me</Nav.Link>
          <Nav.Link className={color ? 'nav-item-scroll' : 'nav-item'} href="#projects-pg">Projects</Nav.Link>
          <Nav.Link className={color ? 'nav-item-scroll' : 'nav-item'} href="#contact-pg">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicNavbar;



