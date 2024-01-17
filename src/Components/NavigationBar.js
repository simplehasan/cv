import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuGraduationCap } from "react-icons/lu";

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="dark" bg="dark">
        <Container>
          <Navbar.Brand className="fw-bold mx-5">ABDULLAH</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto" activeKey={window.location.pathname}>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/education">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/skill">
                Skill
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="/achievement">
                Achievement
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
