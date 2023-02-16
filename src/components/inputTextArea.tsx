import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup } from 'react-bootstrap';
import { InputTextAreaProps } from '../interfaces';

const InputTextArea = ({ label, sup }: InputTextAreaProps) => {
  return (
    <FormGroup>
      <Form.Label htmlFor="inputPassword5">
        {label}
        {sup}
      </Form.Label>
      <Form.Control as="textarea" />
      {/* <Form.Text id="passwordHelpBlock">Text</Form.Text> */}
    </FormGroup>
  );
};

export default InputTextArea;
