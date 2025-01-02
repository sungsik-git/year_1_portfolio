import React from 'react';
import './Navigator.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigator () {
  return (
    <div>
      <Container fluid className="navigator">
        <Row>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="nav_button">Home</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="nav_button">About</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="nav_button">Services</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="nav_button">Portfolio</Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <Button variant="primary" className="nav_button">Contact</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navigator;
