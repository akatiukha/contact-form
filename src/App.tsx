import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputText from './components/InputText';
import InputSelect from './components/InputSelect';
import InputTextArea from './components/inputTextArea';

const App = () => {
  const options = [
    { value: 'Government', selected: true },
    { value: 'Finance', selected: false },
    { value: 'Energy', selected: false }
  ];

  const locations = [
    { value: 'Canada', selected: true },
    { value: 'United Kingdom', selected: false },
    { value: 'France', selected: false }
  ];

  return (
    <Container>
      <Form>
        <Row>
          <Col className="mb-3" sm={6}>
            <InputSelect options={options} label="Inquiry type" sup="*" />
          </Col>
          <Col className="mb-3" sm={6}>
            <InputSelect options={locations} label="Location" sup="*" />
          </Col>
        </Row>

        <Row>
          <Col className="mb-3" sm={6}>
            <InputText
              type="text"
              label="Name"
              id="name-field"
              required
              sup="*"
            />
          </Col>
          <Col className="mb-3" sm={6}>
            <InputText
              type="email"
              label="Email"
              id="email-field"
              required
              sup="*"
            />
          </Col>
        </Row>

        <Row>
          <Col className="mb-3" sm={6}>
            <InputText type="text" label="City" id="city-field" />
          </Col>
          <Col className="mb-3" sm={6}>
            <InputText type="text" label="Phone" id="phone-field" />
          </Col>
        </Row>

        <Row>
          <Col className="mb-3" sm={6}>
            <InputText
              type="text"
              label="Company/Organization"
              id="company-field"
            />
          </Col>
          <Col className="mb-3" sm={6}>
            <InputText type="text" label="Role or job title" id="role-field" />
          </Col>
        </Row>
        <Row>
          <InputTextArea label="Message" sup="*" />
        </Row>
      </Form>
    </Container>
  );
};

export default App;
