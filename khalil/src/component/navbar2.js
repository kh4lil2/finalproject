import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Link} from 'react-router-dom'
import oussama from '../oussama.png'
function Navbar2() {
  return (
    <Navbar className='na' expand="lg">
      <Container>
        <Navbar.Brand > <Link to={"/Register"}><img style={{height: "60px"}}src={oussama}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
       
            <Nav.Link className="me" href={"/Register"}>Register</Nav.Link>
            <Nav.Link className="me" href={"/"}>Login</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;