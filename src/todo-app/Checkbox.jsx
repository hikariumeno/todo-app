import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: Boolean,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    console.log(this.state.checked);
    this.setState({ checked: event.target.checked });
  }

  render() {
    const label = this.props.label;
    const delLabel = <del>{this.props.label}</del>;

    return (
      <Form.Check
        type="checkbox"
        checked={this.state.checked}
        onChange={this.handleToggle}
      >
        <Form.Check.Input type="checkbox" />
        <Form.Check.Label>
          {this.state.checked ? delLabel : label}
        </Form.Check.Label>
      </Form.Check>
    );
  }
}
