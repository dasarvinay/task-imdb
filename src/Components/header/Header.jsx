import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header_Module.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/movie/popular">
                            <Nav.Link>Popular</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/movie/top-rated">
                            <Nav.Link>Top Rated</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/movie/upcoming">
                            <Nav.Link>Upcoming</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;



