import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function CardCars(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>MSRP: <b>${props.carsCard['msrp']}</b></Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>{props.valLoan}</Card.Text>
      </Card.Body>
      <hr />
      <Card.Body>
        <Button variant="success">SHOW THE EDMUNDS DEAL</Button>
        <Button variant="success">GET DEALER OFFER</Button>
        <Card.Text>{props.carsCard['dealerName']}</Card.Text>
        <Card.Text><Card.Link href="#">{props.carsCard['dealerUrl']}</Card.Link></Card.Text>
        <Card.Text>{props.carsCard['dealerPhone']}</Card.Text>
        <Card.Text>({props.carsCard['dealerReviews']} reviews)</Card.Text>
        <Card.Text>Directions</Card.Text>
      </Card.Body>
    </Card>
  );
}  
