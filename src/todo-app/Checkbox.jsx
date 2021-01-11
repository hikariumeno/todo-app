import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({ checked: event.target.checked });
  }

  render() {
    const label = this.props.label;
    const delLabel = <del>{this.props.label}</del>;

    return (
      <Form.Check type="checkbox" checked={this.state.checked}>
        <Form.Check.Input type="checkbox" onChange={this.handleToggle} />
        <Form.Check.Label>
          {this.state.checked ? delLabel : label}
        </Form.Check.Label>
      </Form.Check>
    );
  }
}
