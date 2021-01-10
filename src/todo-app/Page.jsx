import { check } from "prettier";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuTabs } from "./Tabs";
import Container from "react-bootstrap/Container";

export const Page = () => (
  <Container>
    <h1>#todo</h1>
    <MenuTabs></MenuTabs>
    <form>
      <input type="text" placeholder="add details"></input>
      <button type="button">Add</button>
    </form>
    <label htmlFor="check">
      <input type="checkbox" id="check"></input>Do coding Challenges
    </label>
  </Container>
);
