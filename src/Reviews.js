import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyReviews() {
    const buttonStyle={
        background: 'rgba(100, 100, 255, 15)',
        color: 'white'
    };

    const handleClose = ()  => {
        alert ("Thank you for your feedback! Apex fitness cares about our customers' input.");
        // reset form after user hit submit
        document.getElementById("reviewForm").reset();
    };
    return (
        <div className="reviews">
            <Container fluid className="block-example border rounded border-dark" >
                <h1 style = {{padding: '10px'}}>Leave a Review</h1>
                
                <Form className="formReviews" id="reviewForm" style ={{width: '50%', padding: '20px'}} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter First Name"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter Last Name"
                    />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Select Membership</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">Gold</option>
                        <option value="2">Silver</option>
                        <option value="3">Bronze</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Rate our Fitness Center (1-5)</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea6">
                        <Form.Label>Comments on Fitness Experience</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="secondary" style={buttonStyle} onClick={handleClose}>
                        Submit
                    </Button>
                </Form>
                </Container>
        </div>
    );
}

export default MyReviews;