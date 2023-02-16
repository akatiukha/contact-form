import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormGroup } from 'react-bootstrap';
import { InputTextProps } from '../interfaces';

const InputText = ({ type, label, sup, id, required }: InputTextProps) => {
  return (
    <FormGroup>
      <Form.Label htmlFor="inputPassword5">
        {label}
        {sup}
      </Form.Label>
      <Form.Control
        type={type}
        id={id}
        aria-describedby="passwordHelpBlock"
        required={required}
      />
      {/* <Form.Text id="passwordHelpBlock">Text</Form.Text> */}
    </FormGroup>
  );
};

export default InputText;
