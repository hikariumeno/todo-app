import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export class MenuTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "All",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({ activeTab: event });
  }

  render() {
    return (
      <Tabs fill activeKey={this.state.activeTab} onSelect={this.handleSelect}>
        <Tab eventKey="All" title="All"></Tab>
        <Tab eventKey="Active" title="Active"></Tab>
        <Tab eventKey="Completed" title="Completed"></Tab>
      </Tabs>
    );
  }
}
