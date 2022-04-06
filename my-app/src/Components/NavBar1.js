import react from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from './Components/Logo.png'
import { Navbar,Container,Nav,NavDropdown,Form,Button,FormControl } from 'react-bootstrap';
const NavBar1=()=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <img src={require('../Pics/Logo.png')}></img>
        
        <Nav.Link  tag="a" to="/">Home</Nav.Link>
        <Nav.Link tag="a" to="/login-user">SignIn</Nav.Link>
        <Nav.Link tag="a" to="/register-user">SignUp</Nav.Link>
        <Nav.Link href="#">
          More?
        </Nav.Link>
       
      </Nav>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
}
export default NavBar1