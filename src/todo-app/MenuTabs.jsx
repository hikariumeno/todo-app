import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const MenuTabs = (props) => (
  <Tabs fill activeKey={props.activeKey} onSelect={props.onSelect}>
    <Tab eventKey="All" title="All"></Tab>
    <Tab eventKey="Active" title="Active"></Tab>
    <Tab eventKey="Completed" title="Completed"></Tab>
  </Tabs>
);
