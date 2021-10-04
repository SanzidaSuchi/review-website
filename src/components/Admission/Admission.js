import React from 'react';
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Admission = () => {
    return (
        <div style={{ margin: "68px 0" }}>
      <h2 className="text-center">Contact us</h2>
      <div>
        <Container>
          <Form>
            <Row>
              <Col sm>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Control
              className="my-3"
              type="text"
              placeholder="Write Your Subject..."
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Queries....</Form.Label>
              <Form.Control
                placeholder="Write you message..."
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button className="mb-5" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};
            
    

export default Admission;