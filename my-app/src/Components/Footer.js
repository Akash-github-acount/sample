import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,NavDropdown,Form,Button,FormControl } from 'react-bootstrap';

const Footer = () => {
  return (
    <div class="fixed-bottom"  >
     <div>
            <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#action1" text="light" style={{ color: "white" }}>Home</Nav.Link>
        <Nav.Link href="#action2" style={{ color: "white" }}>Link</Nav.Link>
       
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    </div>
  );
}

export default Footer;