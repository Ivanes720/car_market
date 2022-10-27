import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import classes from "./cardPage.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as axios from "axios";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../Redux/actions";
import { requestPhoto } from "../../Redux/reducerCardPage";

function CardCars({ ...props }) {
  const photo = useSelector((state) => state.cardPage.photo);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const routeChange = () => {
    let path = `/InfoCarPage`;
    navigate(path, { state: props.autoId });
  };
 
 
  return (
    <div className={classes.card_block}>
      <Card style={{ width: "20rem" }}>
        <Card.Img className={classes.photo} variant="top" src={props.photo} />
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
