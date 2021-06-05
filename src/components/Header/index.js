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
            <Navbar
                collapseOnSelect
                fixed="top"
                expand=""
                variant="light"
                style={{
                    background: ' #fff ',
                    boxShadow: '0px 0px 4px 0px',
                }}
            >
                <Container fluid>
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <li className="nav-item">
                                <NavLink to='/signin' className="nav-link" >Signin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/signup' className="nav-link" >Signup</NavLink>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}


export default Header