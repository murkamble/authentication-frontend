import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <li className="nav-item">
                                <NavLink to='/signin' className="nav-link" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/signup' className="nav-link" >Register</NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header