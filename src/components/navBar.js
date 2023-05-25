import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import Container from 'react-bootstrap/Container';
import { Form, FormGroup } from "react-bootstrap";
import SidebarMobile from "./sideBarMobileView";
import Avatar from "../assets/images/avatar.png";

function NavBar() {
    return <>
        <Navbar collapseOnSelect expand="lg">
            <Container className="mt-3">
                <Navbar.Brand >
                    <Link to="/">
                        <img id="nav-logo" src={logo} alt="Lendsqr-Logo" />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form>
                        <FormGroup className="" >
                            <span className="flex">
                                <input type="text" placeholder="Search for anything" />
                                <svg xmlns="http://www.w3.org/2000/svg" color="white" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </span>
                        </FormGroup>
                    </Form>
                    <Nav
                        className="justify-content-end flex-grow-1 pe-3"
                        id="hamburger"
                        navbarScroll
                    >
                        <Nav.Link className="me-4" style={{ color: '#213f7d', textDecoration: 'underline' }}>
                            Docs
                        </Nav.Link>

                        <Nav.Link className="me-4">
                            <svg color="#213f7d" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </Nav.Link>

                        <section className="flex">
                            <img src={Avatar} alt="" />
                            <NavDropdown title="Adedeji" id="navbarScrollingDropdown" style={{ color: '#213f7d' }}>
                                <NavDropdown.Item href="#action3">Details</NavDropdown.Item>
                                <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </section>

                    </Nav>
                    <SidebarMobile />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;