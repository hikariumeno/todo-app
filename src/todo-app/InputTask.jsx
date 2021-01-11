import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="add details"
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </Col>
          <Col>
            <Button
              variant="primary"
              type="button"
              onClick={this.props.onClick}
            >
              Add
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
