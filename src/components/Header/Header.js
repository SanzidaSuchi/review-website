import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';


const Header = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "15px",
  };
  const currentStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <NavLink style={linkStyle} to="/home">
            <Navbar.Brand className="text-white">STAMFORD UNIVERSITY</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <NavLink style={linkStyle} activeStyle={currentStyle} to="/home">
                HOME
              </NavLink>
              <NavLink style={linkStyle} activeStyle={currentStyle} to="/about">
                ABOUT US
              </NavLink>
              <NavLink activeStyle={currentStyle} style={linkStyle} to="/services">
                SERVICES
              </NavLink>
              <NavLink
                activeStyle={currentStyle}
                style={linkStyle}
                to="/admission"
              >
                CONTACTS
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
    

export default Header;