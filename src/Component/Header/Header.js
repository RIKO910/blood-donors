import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">BAUST BLOOD</Navbar.Brand>
                    <Nav className="me-2">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about" className='mx-2'>About</Nav.Link>
                        <Navbar.Brand href="#home">DONORS</Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;