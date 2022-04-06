import {Navbar,Nav,Form,Container,NavDropdown,FormControl,Button} from "react-bootstrap"
import Image from "react-bootstrap/esm/Image";
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap"
import { Link } from "react-router-dom"
const Home =()=>{
    
    return (
      <div className="fixed-top">
        <Navbar bg="light" expand="lg">
  <Container fluid>
  <img src={require('../Pics/Logo.png')} style={{width:"40", height:"20"}}/>
    <Form className="d-flex" >
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" >Search</Button>
      </Form>
    <Navbar.Brand href="#">E-Commerce Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                Home
            </Link>
            </ListGroup>
            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/login-user"  action>
                Login
            </Link>
            </ListGroup>
            <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/register-user" action>
                SignUp
            </Link>
            </ListGroup>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
}
export default Home