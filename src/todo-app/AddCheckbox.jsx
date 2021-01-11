import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { InputTask } from "./InputTask";
import { Checkbox } from "./Checkbox";

export class AddCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          task: "",
        },
      ],
      value: "",
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      value: "",
      content: this.state.value,
    });
  }

  renderCheckbox() {
    return <Checkbox label={this.state.content} />;
  }

  render() {
    return (
      <Container>
        <InputTask
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        ></InputTask>
        {this.renderCheckbox()}
      </Container>
    );
  }
}
