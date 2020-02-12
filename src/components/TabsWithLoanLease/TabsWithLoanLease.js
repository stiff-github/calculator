import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import FormLoan from './FormLoan/FormLoan';
import FormLease from './FormLease/FormLease';

export default function TabswithLoanLease(props) {
  const [value, setValue] = useState('-');
  const [value2, setValue2] = useState('-');
  const handleChangeLoan = val => {
    setValue(val);
    let valCard="Est. Loan Payment $"+String(JSON.stringify(value))+"/mo";
    props.handleChangeTab(valCard);
  }
  const handleChangeLease = val => {
    setValue2(val);
    let valCard="Est. Lease Payment $"+String(JSON.stringify(value2))+"/mo";
    props.handleChangeTab(valCard);
  }
  return (
    <Tabs defaultActiveKey="keyLoan" id="uncontrolled-tab-example" justify>
      <Tab eventKey="keyLoan" title={<span>Est. Loan:<br/><b>${value}</b>/mo</span>}>
        <FormLoan priceMSRP={props.priceMSRP} handleChangeLoan={handleChangeLoan} />
      </Tab>
      <Tab eventKey="keyLease" title={<span>Est. Lease:<br/><b>${value2}</b>/mo</span>}>
        <FormLease priceMSRP={props.priceMSRP} handleChangeLease={handleChangeLease} />
      </Tab>
    </Tabs>
  );
}