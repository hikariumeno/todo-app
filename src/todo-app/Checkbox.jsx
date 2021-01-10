import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export const Checkbox = (props) => (
  <Form.Check type="checkbox" label={props.label} />
);
