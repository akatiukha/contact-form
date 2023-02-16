import React from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import { InputSelectProps } from '../interfaces';

const InputSelect = ({ options, label, sup }: InputSelectProps) => {
  return (
    <FormGroup>
      <Form.Label>
        {label}
        {sup}
      </Form.Label>
      <Form.Select aria-label="Default select example">
        {options.map((option) => (
          <option value={option.value} selected={option.selected}>
            {option.value}
          </option>
        ))}
      </Form.Select>
    </FormGroup>
  );
};

export default InputSelect;
