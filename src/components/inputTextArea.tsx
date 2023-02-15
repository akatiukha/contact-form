import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup } from 'react-bootstrap';

const InputTextArea = () => {
  return (
    <FormGroup>
      <Form.Label htmlFor="inputPassword5">{}</Form.Label>
      <Form.Control as="textarea" />
      {/* <Form.Text id="passwordHelpBlock">Text</Form.Text> */}
    </FormGroup>
  );
};

export default InputTextArea;
