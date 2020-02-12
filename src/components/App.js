import React, { Suspense, useState, useEffect } from "react";
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import '../styles/App.css';
import TabsWithLoanLease from './TabsWithLoanLease/TabsWithLoanLease';
import CardCars from './CardCars/CardCars';
import axios from "axios";

function App(props) {
  const [value, setValue] = useState('-');
  const handleChangeTab = val => {
    setValue(val);
  }
  const priceMSRP="23240";
  const dealerName="Minsk Volvo Center"
  const dealerUrl="www.volvo-center13.by"
  const dealerPhone="+375 99 999 99 99"
  const dealerReviews="78"
  /*const [carsCard, setCarsCard] = useState({});
  const [carsCardIsLoad, setCarsCardIsLoad] = useState(false);*/
  const [postal, setPostal] = useState('-');
  useEffect(() => {
    axios
      .get(
        "https://ipinfo.io/json?token=8c4cdc3cdf8a88"
      )
      .then(({ data }) => {
        setPostal(data.postal);
      });

    /*axios
      .get(
        "/public/card_cars.json"
      )
      .then(({ data }) => {
        setCarsCard(data);
        setCarsCardIsLoad(true);
      });*/

  }, []);

    return (
    <Suspense fallback="loading">
      <Container>
        <Row>
          <Col sm={8}><TabsWithLoanLease priceMSRP={priceMSRP} handleChangeTab={handleChangeTab} postal={postal} /></Col>
          <Col sm={4}><CardCars priceMSRP={priceMSRP} valLoan={value} dealerName={dealerName} dealerUrl={dealerUrl} dealerPhone={dealerPhone} dealerReviews={dealerReviews} /></Col>
        </Row>
      </Container>
    </Suspense>
    );
  }

export default App;
