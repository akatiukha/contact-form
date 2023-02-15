import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TextInputProps from '../interfaces';

const InputText = ({ type, label, id, required }: TextInputProps) => {
  return (
    <FormGroup>
      <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
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
