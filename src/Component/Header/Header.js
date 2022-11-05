import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">BAUST BLOOD</Navbar.Brand>
                    <Nav className="me-2">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Link to="/about" className='mx-2 mt-2 text-secondary text-decoration-none'>About</Link>
                        {/* <Nav.Link href="/about" className='mx-2'>About</Nav.Link> */}
                        <Link to="/donor" className='mt-2 text-white font-bold font-weight-bold text-decoration-none'>DONORS</Link>
                        {/* <Navbar.Brand href="/donor">DONORS</Navbar.Brand> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;