import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './NavBar.css';




const NavBar = () => {
    return (
       
        <Navbar collapseOnSelect expand="md" bg="transparent" variant="light" >
        <Container fluid>
            <Navbar.Brand >
              <Link to="/">
  
                <img className="logo" src={logo} alt="" />
  
              </Link>
            </Navbar.Brand>
  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
  
              <Nav className="ml-auto mr-0 align-items-center">
                <Link className='navBar ml-5' to='home'>Home</Link>
                <Link className='navBar ml-5' to='donation' >Donation</Link>
                <Link className='navBar ml-5' to='event'>Event</Link>
                <Link className='navBar ml-5' to='blog'>Blog</Link>
                
              </Nav>
  
              <Nav  className="mr-auto ml-5  align-items-center" >
                <div className="NavBtn">
                <Link to='login'><Button className=' ml-5  mr-3' variant="primary">Register</Button></Link>
                
                <Button variant='danger'>Admin</Button>
                </div>
  
          </Nav>
             
              </Navbar.Collapse>
    
        </Container>
      </Navbar>
    );
};

export default NavBar;