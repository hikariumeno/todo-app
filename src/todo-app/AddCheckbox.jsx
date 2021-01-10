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
          task: "こんにちは",
        },
        {
          task: "こんばんわ",
        },
      ],
    };
  }

  renderCheckbox(i) {
    return <Checkbox label={this.state.tasks[i].task} />;
  }

  render() {
    return (
      <Container>
        <InputTask></InputTask>
        {this.renderCheckbox(0)}
        {this.renderCheckbox(1)}
      </Container>
    );
  }
}
