import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { MenuTabs } from "./MenuTabs";
import { AddCheckbox } from "./AddCheckbox";

export const Page = () => (
  <Container>
    <h1>#todo</h1>
    <MenuTabs></MenuTabs>
    <AddCheckbox></AddCheckbox>
  </Container>
);
