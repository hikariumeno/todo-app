import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export const Checkbox = (props) => {
  const label = props.label;
  const delLabel = <del>{props.label}</del>;

  return (
    <Form.Check type="checkbox">
      <Form.Check.Input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <Form.Check.Label>{props.checked ? delLabel : label}</Form.Check.Label>
    </Form.Check>
  );
};
