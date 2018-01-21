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
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>

        <IndexLinkContainer to="/profile">
          <NavItem>Profile</NavItem>
        </IndexLinkContainer>

        <IndexLinkContainer to="/topics">
          <NavItem>Test Your Knowledge</NavItem>
        </IndexLinkContainer>

        <IndexLinkContainer to="/drag-and-drop">
          <NavItem>Drag and Drop</NavItem>
        </IndexLinkContainer>

        <IndexLinkContainer to="/new-question">
          <NavItem>Add New Question</NavItem>
        </IndexLinkContainer>

        <IndexLinkContainer to="/all-questions">
          <NavItem>All Questions</NavItem>
        </IndexLinkContainer>
        
      </Nav>
    </Navbar>
  );
}


export default NavBar;
