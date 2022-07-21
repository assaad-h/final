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
                <Navbar.Brand href="/final" style={textStyle}>Apex Fitness</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/final" style={textStyle}>About Us</NavLink>
                    <NavLink to="/final/memberships" style={textStyle}>Our Memberships</NavLink>
                    <NavLink to="/final/trainers" style={textStyle}>Our Trainers</NavLink>
                    <NavLink to="/final/machines" style={textStyle}>Our Machines</NavLink>
                    <NavLink to="/final/reviews" style={textStyle}>Leave a Review</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;