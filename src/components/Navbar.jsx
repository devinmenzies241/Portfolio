import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasNavigation() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={'lg'} className="mb-3 navbar" sticky='top' variant='dark' collapseOnSelect='true'>
          <Container fluid>
            <Navbar.Brand href="/">DM</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              scroll={true}
              restoreFocus={true}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Devin Menzies
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link className='nav-item' href="#aboutMe-pg">About Me</Nav.Link>
                  <Nav.Link className='nav-item' href="#projects-pg">Projects</Nav.Link>
                  <Nav.Link className='nav-item' href="#contact-pg">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasNavigation;