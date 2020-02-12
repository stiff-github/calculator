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
  const [carsCard, setCarsCard] = useState({});
  const [carsCardIsLoad, setCarsCardIsLoad] = useState(false);
  const [postal, setPostal] = useState('-');
  useEffect(() => {
    axios
      .get(
        "https://ipinfo.io/json?token=8c4cdc3cdf8a88"
      )
      .then(({ data }) => {
        setPostal(data.postal);
      });

    axios
      .get(
        "./public/card-cars.json"
      )
      .then(({ data }) => {
        setCarsCard(data);
        setCarsCardIsLoad(true);
      });

  }, []);

    return carsCardIsLoad ? (    
      <Suspense fallback="loading">
        <Container>
          <Row>
            <Col sm={8}><TabsWithLoanLease carsCard={carsCard} handleChangeTab={handleChangeTab} postal={postal} /></Col>
            <Col sm={4}><CardCars valLoan={value} carsCard={carsCard} /></Col>
          </Row>
        </Container>
      </Suspense>
    ) : (      
      <Spinner animation="border" size="lg" />
    );
  }

export default App;