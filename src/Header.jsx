import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#">BRANDBOX</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" onClick={() => setExpanded(false)}>
              HOME
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              ABOUT
            </Nav.Link>
            <Nav.Link href="#project" onClick={() => setExpanded(false)}>
              PROJECTS
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
