import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import asmith from './asmith.jpg';
import thill from './thill.jpg';
import dadams from './dadams.jpg';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function MyTrainer() {
    const buttonStyle={
        background: 'rgba(100, 100, 255, 15)',
        color: 'white',
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        var fname = document.forms["trainerForm"]["fname"].value;
        var lname = document.forms["trainerForm"]["lname"].value;
        var email = document.forms["trainerForm"]["email"].value;
        var date = document.forms["trainerForm"]["date"].value;
        var appt = document.forms["trainerForm"]["appt"].value;

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
        } else if (date.trim() === "") {
            alert ("Please enter a date!");
        } else if ( (new Date()) > (new Date( parseInt(date.split("-")[0]), parseInt(date.split("-")[1])-1, parseInt(date.split("-")[2]) ,23, 59, 59) ) ) {
            alert ("Please enter a valid date (Today or after)!");
        } else if (appt.trim() === "") {
            alert ("Please enter a time for your appointment!");
        } else if (parseInt(appt.split(":")[0]) < 10  || parseInt(appt.split(":")[0]) > 22) {
            alert ("Please enter a valid time for your appointment (10am to 10pm)!");
        } else if (parseInt(appt.split(":")[0]) == 22 && parseInt(appt.split(":")[1]) > 0) {
            alert ("Please enter a valid time for your appointment (10am to 10pm)!");
        } else {
            setShow(false);
            alert("Thank you for booking a training session with Apex Fitness! If you are a GOLD member, you will receive an email confirmation shortly.");
        }
    }
    const handleShow = () => setShow(true);

    return (
        <div className="Trainers">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Our Trainers</h1>
                <h5 style = {{padding: '10px'}}>Our Trainers are available from Monday to Friday from 10am to 10pm for Gold Members ONLY! They are all listed below.
                <br/><br/>
                <Button variant="secondary" style={buttonStyle} onClick={handleShow}>Book Training</Button></h5>
                <div  style = {{padding: "10px"}}>
                    <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Biography</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{textAlignVertical: 'center'}}>
                            <td><Image className="rounded mb-0 fluid" alt="Alex Smith" src={asmith} style={{width:'200px', height:'200px'}}/></td>
                            <td>Alex Smith</td>
                            <td><strong>Alexander Douglas Smith</strong> is a former American football quarterback who played in the National Football League for 16 seasons. 
                                He played college football at Utah, where he received first-team All-American honors and won the 2005 Fiesta Bowl.</td>
                        </tr>
                        <tr>
                            <td><Image className="rounded mb-0 fluid" alt="Tyreek Hill" src={thill} style={{width:'200px', height:'200px'}}/></td>
                            <td>Tyreek Hill</td>
                            <td>Nicknamed 'cheetah', <strong>Tyreek Hill</strong> is a wide receiver who used to play for the NFL team Kansas City Chiefs. Hill was traded to the Miami Dolphins on March 24, 2022. 
                                He is the fastest player in the NFL and transitioned from a return specialist into a wide receiver.</td>
                        </tr>
                        <tr>
                            <td><Image className="rounded mb-0 fluid" alt="Davante Adams" src={dadams} style={{width:'200px', height:'200px'}}/></td>
                            <td>Davante Adams</td>
                            <td><strong>Davante Lavell Adams</strong> is an American football wide receiver for the Las Vegas Raiders of the National Football League. 
                                He played college football at Fresno State, and was selected by the Green Bay Packers in the second round of the 2014 NFL Draft.</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Book a Training Session</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form name="trainerForm" id="trainerForm">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter First Name"
                        name="fname"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Last Name"
                        name="lname"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Select Trainer</Form.Label>
                    <Form.Select aria-label="Trainer Select">
                        <option value="1" aria-label="Alex Smith">Alex Smith</option>
                        <option value="2" aria-label="Tyreek Hill">Tyreek Hill</option>
                        <option value="3" aria-label="Davante Adams">Davante Adams</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Please enter a date</Form.Label>
                    <div>
                        <input type="date" name="date" id="date"/>
                    </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Please enter a time (10am to 10pm)</Form.Label>
                    <div>
                        <input type="time" id="appt" name="appt" />
                    </div>
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

export default MyTrainer;