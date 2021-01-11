import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { InputTask } from "./InputTask";
import { Checkbox } from "./Checkbox";

export class AddCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
      taskNumber: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    const tasks = this.state.tasks.slice(0, this.state.taskNumber + 1);
    this.setState({
      value: "",
      tasks: tasks.concat([
        {
          task: this.state.value,
        },
      ]),
      taskNumber: tasks.length,
    });
  }

  render() {
    const tasks = this.state.tasks;
    const taskList = tasks.map((value, task) => {
      return (
        <li key={task}>
          <Checkbox label={tasks[task].task} />
        </li>
      );
    });

    return (
      <Container>
        <InputTask
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        ></InputTask>
        <ol className="list-unstyled">{taskList}</ol>
      </Container>
    );
  }
}
