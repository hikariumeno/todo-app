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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      content: this.state.value,
      value: "",
    });
    console.log(this.state.content);
  }

  renderCheckbox(i) {
    this.setState();
    return <Checkbox label={this.state.tasks[i].task} />;
  }

  render() {
    return (
      <Container>
        <InputTask
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></InputTask>
        {this.renderCheckbox(0)}
        {/* {this.renderCheckbox(1)} */}
      </Container>
    );
  }
}
