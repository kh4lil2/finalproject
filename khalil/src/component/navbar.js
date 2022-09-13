import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {Link} from 'react-router-dom'
import oussama from '../oussama.png'
function Navbar1() {
  return (
    <Navbar className='na' expand="lg">
      <Container>
        <Navbar.Brand > <Link to={"/Home"}><img style={{height: "60px"}}src={oussama}/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="me" href="/Home" >Home</Nav.Link>
            <Nav.Link className="me" href="Coaching">Coaching</Nav.Link>
            <Nav.Link className="me" href="Galerie">Galerie</Nav.Link>
            <Nav.Link className="me" href="Contact">Contact</Nav.Link>
            <Nav.Link className='me' href="/">Deconnexion</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;