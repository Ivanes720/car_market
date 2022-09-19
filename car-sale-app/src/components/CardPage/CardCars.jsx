import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import carddefault from "../../assetc/img/carddefault.png";
import classes from "./cardPage.module.css";
import React from "react";

function CardCars(props) {

  return (
    <div className={classes.card_block}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={carddefault} />
        <Card.Body>
          <Card.Title>Bentley</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">1000$</Card.Subtitle>
          <Card.Text>Car from dealer</Card.Text>
          <Button variant="dark">More</Button>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCars;
