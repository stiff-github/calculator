import React, { useState, useEffect } from 'react';
import { Form, Col, ToggleButtonGroup,  ToggleButton, InputGroup, FormControl} from 'react-bootstrap';

export default function FormLease(props) {
  let [value, setValue] = useState([36]);
  let [value2, setValue2] = useState([1.05]);
  let [value3, setValue3] = useState([12000]);
  const handleChange = val => {
    setValue(val);
    runLoan();
  };
  const handleChange2 = val => {
    setValue2(val);
    runLoan();
  };
  const handleChangeMiles = val => {
    setValue3(val);
    runLoan();
  };
  const [tradeIn, setTradeIn] = useState("0");
  const [dawnPayment, setDawnPayment] = useState("0");

  function runLoan () {
    let valLease=Math.round((props.priceMSRP-tradeIn-dawnPayment)*value3/10000/value*value2);
    props.handleChangeLease(valLease);
  };

  return (
    <>
      <Form>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Edmunds Suggested Price</Form.Label>
          </Col>
          <Col className="d-flex justify-content-end">
            <Form.Label>${props.priceMSRP}</Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Term (Months)</Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <ToggleButtonGroup name="options" value={value} onChange={handleChange} size="lg" onBlur={runLoan} >
            <ToggleButton variant="outline-dark" value={24}>24</ToggleButton>
            <ToggleButton variant="outline-dark" value={36}>36</ToggleButton>
            <ToggleButton variant="outline-dark" value={48}>48</ToggleButton>
          </ToggleButtonGroup>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Annual Miles</Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <ToggleButtonGroup name="options" value={value3} onChange={handleChangeMiles} size="lg" onBlur={runLoan} >
            <ToggleButton variant="outline-dark" value={10000}>10000</ToggleButton>
            <ToggleButton variant="outline-dark" value={12000}>12000</ToggleButton>
            <ToggleButton variant="outline-dark" value={15000}>15000</ToggleButton>
          </ToggleButtonGroup>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Trade-In Value</Form.Label>
          </Col>
          <Col xs="2" className="justify-content-end">
            <InputGroup className="mb-3" >
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={tradeIn} onChange={(event) => setTradeIn(event.target.value)} onBlur={runLoan} onKeyPress={event => {
                if (event.key === 'Enter') {
                  runLoan()
                }
              }} />
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Down Payment</Form.Label>
          </Col>
          <Col xs="2" className="justify-content-end">
            <InputGroup className="mb-3" >
              <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={dawnPayment} onChange={(event) => setDawnPayment(event.target.value)} onBlur={runLoan} onKeyPress={event => {
                if (event.key === 'Enter') {
                  runLoan()
                }
              }} />
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Approx. Credit Score</Form.Label>
          </Col>
        </Form.Row>
        <Form.Row>
          <ToggleButtonGroup name="options2" value={value2} onChange={handleChange2} size="lg" onBlur={runLoan} >
            <ToggleButton variant="outline-dark" value={0.95}><b>Poor</b>      <br/>639 or less</ToggleButton>
            <ToggleButton variant="outline-dark" value={1}><b>Fair</b>      <br/>640 - 699</ToggleButton>
            <ToggleButton variant="outline-dark" value={1.05}><b>Good</b>      <br/>700 - 749</ToggleButton>
            <ToggleButton variant="outline-dark" value={1.2}><b>Excellent</b> <br/>750 - 850</ToggleButton>
          </ToggleButtonGroup>
        </Form.Row>
      </Form>
    </>
  );
}
