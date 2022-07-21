import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Gold from './gold.jpg';
import Silver from './silver.jpg';
import Bronze from './bronze.jpg';

function MyMemberships() {
    const buttonStyle={
        background: 'rgba(100, 100, 255, 15)',
        color: 'white'
    };
    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
      } = usePaymentInputs();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        var fname = document.forms["membershipForm"]["fname"].value;
        var lname = document.forms["membershipForm"]["lname"].value;
        var email = document.forms["membershipForm"]["email"].value;

        // form validation
        if (fname.trim() === ""){
            alert ("Please enter a first name!");
        } else if (lname.trim() === "") {
            alert ("Please enter a last name!");
        } else if (email.trim() === "") {
            alert ("Please enter your email!");
        } else if (!email.trim().match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert ("Please enter valid email!");
        } else {
            setShow(false);
            alert("Welcome to Apex Fitness!");
        }
    }
    const handleShow = () => setShow(true);

    return (
        <div className="memberships">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Our Memberships</h1>
                <Row className= "rowMembership" style = {{padding: '20px', textAlign: "center"}}>
                    <Col>
                        <Card className="cardAlign" style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Gold Membership" src={Gold} style={{width:'275px', height:'275px', padding: '10px'}} />
                            <Card.Body>
                                <Card.Title>Gold Membership (60$/month)</Card.Title>
                                <Card.Text>
                                    - Basic Gym Access
                                    <br />
                                    - Swimming pools
                                    <br />
                                    - Sauna
                                    <br />
                                    - Towel Service
                                    <br />
                                    - Squash
                                    <br />
                                    - Personal Training
                                    <br />
                                    - MindDen rooms
                                    <br />
                                    - Towel Service
                                    <br />
                                    - Hydro Massage
                                    <br />
                                </Card.Text>
                                <Button variant="secondary" style={buttonStyle} onClick={handleShow}>Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardAlign" style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Silver Membership" src={Silver} style={{width:'275px', height:'275px', padding: '10px'}} />
                            <Card.Body>
                                <Card.Title>Silver Membership (40$/month)</Card.Title>
                                <Card.Text>
                                    - Basic Gym Access
                                    <br />
                                    - Swimming pools
                                    <br />
                                    - Sauna
                                    <br />
                                    - Towel Service
                                    <br /><br /><br /><br /><br /><br />
                                </Card.Text>
                                <Button variant="secondary" style={buttonStyle} onClick={handleShow}>Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="cardAlign" style={{ width: '18rem' }}>
                            <Card.Img variant="top" alt="Bronze Membership" src={Bronze} style={{width:'275px', height:'275px', padding: '10px'}} />
                            <Card.Body>
                                <Card.Title>Bronze Membership (20$/month)</Card.Title>
                                <Card.Text>
                                    - Basic Gym Access
                                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                                </Card.Text>
                                <Button variant="secondary" style={buttonStyle} onClick={handleShow}>Enroll Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Become a member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form name="membershipForm">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="name"
                        name="fname"
                        placeholder="Enter First Name"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="name"
                        name="lname"
                        placeholder="Enter Last Name"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Select Membership</Form.Label>
                    <Form.Select aria-label="Membership Select">
                        <option value="1" aria-label="Gold">Gold (60$/month)</option>
                        <option value="2" aria-label="Silver">Silver (40$/month)</option>
                        <option value="3" aria-label="Bronze">Bronze (20$/month)</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Enter Credit Card Information</Form.Label>
                    <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({ images })} />
                        <input {...getCardNumberProps()} />
                        <input {...getExpiryDateProps()} />
                        <input {...getCVCProps()} />
                    </PaymentInputsWrapper>
                    </Form.Group>

                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}   

export default MyMemberships;