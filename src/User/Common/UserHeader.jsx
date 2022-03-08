import React from 'react';
import logo from '../../asset/image/creditsensei.png';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


export default function UserHeader() {
    return (
        <>

            <Navbar bg="light" expand="lg" sticky="top" className='navbarcontainer'>
                <Container fluid>
                    <Navbar.Brand href="#">  <div className='navbarBrand'>
                        <Link to="/" className='navmenubutton'><img src={logo} className="d-inline-block align-top headerlogo " /></Link>
                    </div></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav className=" my-2 my-lg-0" navbarScroll  >
                            <Nav.Link className='navlink '><Link to="/useHome" className='navmenu'>HOME</Link></Nav.Link>
                            <Nav.Link className='navlink'><Link to="/creditItem" className='navmenu'>CREDIT ITEMS</Link></Nav.Link>
                            <Nav.Link className='navlink'><Link to="/disputeletter" className='navmenu'>DISPUTE LETTERS</Link></Nav.Link>
                            <Nav.Link className='navlink'><Link to="/history" className='navmenu'>MY HISTORY</Link></Nav.Link>
                           
                            <NavDropdown id="dropdown" className='profileDropdown' title={ <FaUserCircle className='usericon' />}  >
                                <NavDropdown.Item >Hi Username</NavDropdown.Item>
                                <NavDropdown.Item><Link to="/myaccount" className='navmenu'>My Account</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/general" className='navmenu'>FAQ</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </>
    )
}
