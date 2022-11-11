import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import classes from "./cardPage.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
function CardCars({ ...props }) {

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/InfoCarPageContainer`;
    navigate(path, { state: props.autoId });
  };
 
  return (
    <div className={classes.card_block}>
      
      <Card style={{ width: "20rem" }}>
        <Card.Img  className={classes.userPhoto} variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>{props.mark}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.model}
          </Card.Subtitle>
          <Card.Text>{`${props.price} $`}</Card.Text>
          <Button
            onClick={(e) => {
              routeChange();
             
            }}
            variant="dark"
          >
            Открыть
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCars;
