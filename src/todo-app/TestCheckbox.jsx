import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

export const TestCheckbox = () => (
  <>
    <Form.Check aria-label="option 1" />
    <Form.Check type="radio" aria-label="radio 1" />
  </>
);
