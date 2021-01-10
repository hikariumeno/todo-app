import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export const MenuTabs = () => (
    <Tabs defaultActiveKey="All" id="uncontrolled-tab-example">
        <Tab eventKey="All" title="All">
        </Tab>
        <Tab eventKey="Active" title="Active">
        </Tab>
        <Tab eventKey="Completed" title="Completed">
        </Tab>
    </Tabs> 
);
