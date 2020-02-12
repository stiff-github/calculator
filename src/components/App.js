import React, { Suspense, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/App.css';
import TabsWithLoanLease from './TabsWithLoanLease/TabsWithLoanLease';
import CardCars from './CardCars/CardCars';

function App(props) {
  const priceMSRP="23240";
  const valLoan="555";
  const dealerName="Minsk Volvo Center"
  const dealerUrl="www.volvo-center13.by"
  const dealerPhone="+375 99 999 99 99"
  const dealerReviews="78"
  const [value, setValue] = useState('-');
  const handleChangeTab = val => {
    setValue(val);
  }

    return (    
      <Suspense fallback="loading">
        <Container>
          <Row>
            <Col sm={8}><TabsWithLoanLease priceMSRP={priceMSRP} handleChangeTab={handleChangeTab} /></Col>
            <Col sm={4}><CardCars priceMSRP={priceMSRP} valLoan={value} dealerName={dealerName} dealerUrl={dealerUrl} dealerPhone={dealerPhone} dealerReviews={dealerReviews} /></Col>
          </Row>
        </Container>
      </Suspense>
    );
  }

export default App;