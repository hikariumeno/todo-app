import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const InputText = () => (
  <Form>
    <Form.Row>
      <Col>
        <Form.Control type="text" placeholder="add details" />
      </Col>
      <Col>
        <Button variant="primary">Add</Button>
      </Col>
    </Form.Row>
  </Form>
);
