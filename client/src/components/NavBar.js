import React from 'react';
import {IndexLinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';

const NavBar = () => {
  return(
    <Navbar className="nav">
      <Navbar.Header>
        <Navbar.Brand>
          <h1 className="title">LearnJs</h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <IndexLinkContainer to="/topics">
          <NavItem>Topics</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/profile">
          <NavItem>Profile</NavItem>
        </IndexLinkContainer>
      </Nav>
    </Navbar>
  );
}


export default NavBar;
