import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../Assets/Img/logo.png';


export default function Header() {
    return (
        <>
 
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid style={{backgroundColor:'#130B17'}}>
        <Navbar.Brand href="#"><img src={img} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: 'white'}}>Web3Makr</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white'}}>White paper</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white'}}>Services</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white'}}>Tool</Nav.Link>
            <Nav.Link href="#action2" style={{ color: 'white'}}>Contact Us</Nav.Link>
           
        
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success" style={{ background: 'linear-gradient(to bottom, rgb(8,8,8) 0%, rgb(131,87,55) 50%, rgb(90,50,81) 100%)' }}>START FOR FREE</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </>

    );
}