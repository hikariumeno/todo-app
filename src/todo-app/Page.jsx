import { check } from "prettier";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { MenuTabs } from "./MenuTabs";
import { InputTask } from "./InputTask";
import { Checkbox } from "./Checkbox";

export const Page = () => (
  <Container>
    <h1>#todo</h1>
    <MenuTabs></MenuTabs>
    <InputTask></InputTask>
    <Checkbox></Checkbox>
  </Container>
);
