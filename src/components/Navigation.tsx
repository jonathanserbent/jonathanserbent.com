import { faEnvelope, faHome, faLaptopCode, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => (
    <Navbar className="sticky-top" expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="/">Jonathan Serbent</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-collapse"/>
        <Navbar.Collapse id="navbar-collapse">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/"><FontAwesomeIcon icon={faHome} inverse /> Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/about-me"><FontAwesomeIcon icon={faUser} inverse /> About Me</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/coding"><FontAwesomeIcon icon={faLaptopCode} inverse /> Coding Projects</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/music"><FontAwesomeIcon icon={faMusic} inverse /> My Music</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact"><FontAwesomeIcon icon={faEnvelope} inverse /> Contact Me</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)