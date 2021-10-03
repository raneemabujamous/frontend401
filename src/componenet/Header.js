import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/fav">favaroite</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
