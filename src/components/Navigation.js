import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/**
 * import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button,
Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
 */

export default function Navigation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Navbar.Brand as={NavLink} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link exact as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
                        <Nav.Link as={NavLink} to='/todo'>Todo</Nav.Link>
                        <Nav.Link as={NavLink} to='/common-one'>Array Route 1</Nav.Link>
                        <Nav.Link as={NavLink} to='/common-two'>Array Route 2</Nav.Link>
                        <Nav.Link as={NavLink} to='/topics'>Topics</Nav.Link>
                        <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
                        <Nav.Link as={NavLink} to='/protected'>Protected</Nav.Link>
                        <Nav.Link as={NavLink} to='/private'>private</Nav.Link>
                        <Nav.Link as={NavLink} to='/private/100'>private/100</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item exact as={NavLink} to="/">Home</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/about">About</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={NavLink} to="/contact">Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
