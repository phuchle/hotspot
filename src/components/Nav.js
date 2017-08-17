import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link style={{ color: 'red' }} to="/">
            HotSpot
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem href="https://github.com/phuchle/hotspot">
            Source Code
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
