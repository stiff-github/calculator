import React, { useState, useEffect } from 'react';
import { Form, Col, ToggleButtonGroup,  ToggleButton, InputGroup, FormControl} from 'react-bootstrap';

export default function FormLoan(props) {
  let [value, setValue] = useState([24]);
  let [value2, setValue2] = useState([1.05]);
  //const handleChange = val => setValue(val);
  const handleChange = val => {
    setValue(val);
    runLoan();
  };
  const handleChange2 = val => {
    setValue2(val);
    runLoan();
  };
  const [tradeIn, setTradeIn] = useState("0");
  const [dawnPayment, setDawnPayment] = useState("0");
  const [apr, setApr] = useState("0");

  function runLoan () {
    /*console.log(props.priceMSRP);
    console.log(tradeIn);
    console.log(dawnPayment);
    console.log(value);
    console.log(apr);
    console.log((100+Number(apr))/100);
    console.log(value2);*/
    let valLoan=Math.round((props.priceMSRP-tradeIn-dawnPayment)/value*((100+Number(apr))/100)*value2);
    props.handleChangeLoan(valLoan);
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
            <ToggleButton variant="outline-dark" value={12}>12</ToggleButton>
            <ToggleButton variant="outline-dark" value={24}>24</ToggleButton>
            <ToggleButton variant="outline-dark" value={36}>36</ToggleButton>
            <ToggleButton variant="outline-dark" value={48}>48</ToggleButton>
            <ToggleButton variant="outline-dark" value={72}>72</ToggleButton>
            <ToggleButton variant="outline-dark" value={84}>84</ToggleButton>
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
        <Form.Row>
          <Col xs="auto">
            <Form.Label>Estimated APR</Form.Label>
          </Col>
          <Col xs="2" className="justify-content-end">
            <InputGroup className="mb-3" >
              <FormControl value={apr} onChange={(event) => setApr(event.target.value)} onBlur={runLoan} onKeyPress={event => {
                if (event.key === 'Enter') {
                  runLoan()
                }
              }} />
              <InputGroup.Append>
                <InputGroup.Text>%</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs="auto">
            <Form.Label>For ZIP Code</Form.Label>
          </Col>
          <Col xs="2" className="justify-content-end">
            <FormControl value={props.postal} readOnly />
          </Col>
        </Form.Row>
      </Form>
    </>
  );
}
