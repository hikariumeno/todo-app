import { check } from "prettier";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { MenuTabs } from "./MenuTabs";
import { InputText } from "./InputText";

export const Page = () => (
  <Container>
    <h1>#todo</h1>
    <MenuTabs></MenuTabs>
    <InputText></InputText>
    <label htmlFor="check">
      <input type="checkbox" id="check"></input>Do coding Challenges
    </label>
  </Container>
);
