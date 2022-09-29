import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import React from "react";
import logoLink from "../../utils/logoLink";

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none nav-item">
          <Navbar.Brand>
            <img
              alt=""
              src={logoLink}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            Contact Keeper
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto"></Nav>
          <Nav>
            <Link to="/" className="text-decoration-none nav-item">
              <span className="nav-link">Home</span>
            </Link>
            <Link to="/about" className="text-decoration-none nav-item">
              <span className="nav-link">About</span>
            </Link>
            <Link to="/register" className="text-decoration-none nav-item me-2">
              <Button variant="outline-info mb-2 mb-lg-0">Register</Button>
            </Link>
            <Link to="/login" className="text-decoration-none nav-item">
              <Button variant="outline-light">Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
