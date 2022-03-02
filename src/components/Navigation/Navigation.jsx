import React from 'react'
import './Navigation.css';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import logo from '../../assets/img/jugador.gif'
import carrito from '../../assets/img/carrito.png'


const Navigation = () => {

  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img id="logo" src={logo} />
            <Navbar.Brand id="nombre_tienda">Mega Sport</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Tienda</Nav.Link>
        </Nav>
        <Nav>
          <svg xmlns="http://www.w3.org/2000/svg"     class="icon icon-tabler icon-tabler-shopping-cart" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        </Nav>
        
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
    </>
    
  );
}

export default Navigation