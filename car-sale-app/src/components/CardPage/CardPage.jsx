import React from "react";
import CardCars from "./CardCars";
import classes from "./cardPage.module.css";

function CardPage({ ...props }) {
  if (props.loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={classes.card_block}>
      {props.cards.map((obj) => (
        <CardCars
          key={obj.data.autoData.autoId}
          autoId={obj.data.autoData.autoId}
          photo={obj.data.photoData.seoLinkB}
          price={obj.data.USD}
          mark={obj.data.markName}
          model={obj.data.modelName}
        />
      ))}
    </div>
  );
}

export default CardPage;
