import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { MenuTabs } from "./MenuTabs";
import { InputTask } from "./InputTask";
import { Checkbox } from "./Checkbox";

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      value: "",
      taskNumber: 0,
      activeTab: "All",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.value === "") {
      return;
    }
    const tasks = this.state.tasks.slice(0, this.state.taskNumber + 1);
    this.setState({
      value: "",
      tasks: tasks.concat([
        {
          task: this.state.value,
          checked: false,
        },
      ]),
      taskNumber: tasks.length,
    });
  }

  handleToggle(i, event) {
    const tasks = this.state.tasks.slice();
    tasks[i].checked = event.target.checked;
    this.setState({ tasks: tasks });
  }

  handleSelect(event) {
    this.setState({ activeTab: event });
  }

  render() {
    const tasks = this.state.tasks;
    const activeTasks = tasks.filter((task) => task.checked == false);
    const completedTasks = tasks.filter((task) => task.checked == true);

    const taskList = (tasks) =>
      tasks.map((task, i) => (
        <li key={task + i}>
          <Checkbox
            label={task.task}
            checked={task.checked}
            onChange={(event) => this.handleToggle(i, event)}
            activeTab={this.state.activeTab}
          />
        </li>
      ));

    return (
      <Container>
        <h1>#todo</h1>
        <MenuTabs
          activeKey={this.state.activeTab}
          onSelect={this.handleSelect}
        ></MenuTabs>
        <InputTask
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        ></InputTask>
        <ol className="list-unstyled">
          {this.state.activeTab === "All"
            ? taskList(tasks)
            : this.state.activeTab === "Active"
            ? taskList(activeTasks)
            : taskList(completedTasks)}
        </ol>
      </Container>
    );
  }
}
