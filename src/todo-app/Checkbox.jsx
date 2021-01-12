import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Trash } from "react-bootstrap-icons";

export const Checkbox = (props) => {
  const label = props.label;
  const delLabel = <del>{props.label}</del>;

  const button = (
    <Button variant="link" type="button" size="sm" onClick={props.onClick}>
      <Trash></Trash>
    </Button>
  );
  const trashButton = props.activeTab === "Completed" ? button : null;

  return (
    <ButtonToolbar
      className="justify-content-between"
      aria-label="Toolbar with Button groups"
    >
      <Form.Check type="checkbox">
        <Form.Check.Input
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <Form.Check.Label>{props.checked ? delLabel : label}</Form.Check.Label>
      </Form.Check>
      {trashButton}
    </ButtonToolbar>
  );
};
