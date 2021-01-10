import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const InputTask = (props) => (
  <Form>
    <Form.Row>
      <Col>
        <Form.Control
          type="text"
          placeholder="add details"
          value={props.value}
        />
      </Col>
      <Col>
        <Button variant="primary" type="button">
          Add
        </Button>
      </Col>
    </Form.Row>
  </Form>
);
