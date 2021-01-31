import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export const InputTask = (props) => (
  <InputGroup>
    <FormControl
      type="text"
      placeholder="add details"
      value={props.value}
      onChange={props.onChange}
    />
    <Button variant="primary" type="button" onClick={props.onClick}>
      Add
    </Button>
  </InputGroup>
);
