import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import InputText from './components/InputText';
import InputSelect from './components/InputSelect';

const App = () => {
  const options = [
    { value: 'Gov', selected: true },
    { value: 'Finance', selected: false }
  ];

  return (
    <Form>
      <InputSelect options={options} label="Inquiry type" />
      <InputText type="text" label="Name" id="name-field" required />
      <InputText type="email" label="Email" id="email-field" required />
      <InputText type="text" label="City" id="city-field" />
      <InputText type="text" label="Phone" id="phone-field" />
      <InputText type="text" label="Company/Organization" id="company-field" />
      <InputText type="text" label="Role or job title" id="role-field" />
    </Form>
  );
};

export default App;
