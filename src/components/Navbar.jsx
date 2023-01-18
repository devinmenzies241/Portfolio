import React from 'react'; 
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicNavbar() {
  return (
    <Navbar sticky='top'>
      <Navbar.Brand href="#app" className='navbar-brand'>DM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='nav-item' href="#aboutMe-pg">About Me</Nav.Link>
          <Nav.Link className='nav-item' href="#projects-pg">Projects</Nav.Link>
          <Nav.Link className='nav-item' href="#contact-pg">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicNavbar;



