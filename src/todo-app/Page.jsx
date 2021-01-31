import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";
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
    this.handleDeleteOne = this.handleDeleteOne.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
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
          id: Math.random().toString(32).substring(2),
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

  handleDeleteOne(id, event) {
    event.preventDefault();
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: tasks,
    });
  }

  handleDeleteAll(event) {
    event.preventDefault();
    const tasks = this.state.tasks.filter((task) => task.checked == false);
    this.setState({
      tasks: tasks,
    });
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
            id={task.id}
            onChange={(event) => this.handleToggle(i, event)}
            activeTab={this.state.activeTab}
            onClick={(event) => this.handleDeleteOne(task.id, event)}
          />
        </li>
      ));

    const deleteButton =
      this.state.activeTab === "Completed" ? (
        <Button
          className="float-right"
          variant="danger"
          type="button"
          onClick={this.handleDeleteAll}
        >
          <Trash></Trash> delete all
        </Button>
      ) : null;

    return (
      <Container>
        <h1>#todo</h1>
        <MenuTabs
          activeKey={this.state.activeTab}
          onSelect={this.handleSelect}
        ></MenuTabs>
        <br></br>
        <InputTask
          value={this.state.value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        ></InputTask>
        <br></br>
        <ol className="list-unstyled">
          {this.state.activeTab === "All"
            ? taskList(tasks)
            : this.state.activeTab === "Active"
            ? taskList(activeTasks)
            : taskList(completedTasks)}
        </ol>
        {deleteButton}
      </Container>
    );
  }
}
