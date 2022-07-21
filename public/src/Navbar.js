import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";

const MyNavbar = () => {
    const navbarStyle={
        background: 'rgba(100, 100, 255, 15)',
        position: 'sticky'
    };

    const textStyle = {
        color: "white",
    };

    return (  
        <Navbar expand="lg" style={navbarStyle}>
            <Container fluid>
                <Navbar.Brand href="/" style={textStyle}>Apex Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" style={textStyle}>About Us</NavLink>
                    <NavLink to="/memberships" style={textStyle}>Our Memberships</NavLink>
                    <NavLink to="/machines" style={textStyle}>Our Machines</NavLink>
                    <NavLink to="/reviews" style={textStyle}>Leave a Review</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;