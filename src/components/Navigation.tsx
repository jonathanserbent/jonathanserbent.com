import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => (
    <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Jonathan Serbent</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse"/>
        <Navbar.Collapse id="navbar-collapse">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="not found">404 page</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)