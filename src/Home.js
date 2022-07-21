import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import location from './location.PNG';
import appointments from './appointments.jpg';
import phone from './phoneNumIcon.png';
import dumbbell from './dumbbell.jpg';
import email from './email.jpg';

function MyHome() {
  return (
    <div className="home">
        <Container fluid className="block-example border rounded border-dark" >
            <Row className= "rowImage" style = {{padding: '10px'}}>
                <Col>
                    <h1>About Us</h1>
                    <p>We are rated as the top fitness center in Canada</p>
                    <>
                        <p><img src={location} alt="location logo" id="icon" style={{width:'60px'}}/>We are located at 2567 Bank Street in Ottawa, Ontario</p>
                        <p><img src={phone} alt="phone logo" id="icon" style={{width:'60px', padding:'5px'}}/>We can be contacted via phone at 613-225-5961</p>
                        <p><img src={email} alt="phone logo" id="icon" style={{width:'60px', padding:'5px'}}/>We can be contacted via email at apexfitness@gmail.com</p>
                        <p><img src={appointments} alt="hours logo" id="icon" style={{width:'60px'}}/>We are open for 24 hours a day, 7 days a week</p>
                    </>
                </Col>
                <Col>
                    <img src={dumbbell} className="App-logo myImageClass" alt="dumbell logo" />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default MyHome;