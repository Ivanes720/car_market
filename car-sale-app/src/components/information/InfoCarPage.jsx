import React from "react";
import classes from "../information/information.module.css";
import Slideshow from "../carousel/Carousel";

function InfoCarPage({...props}) {
  
  return (
    <>
      {props.info === null ? (
        <div>loading</div>
      ) : (
        <div className={classes.details_container}>
          <>
            <div className={classes.datails_card}>
              <div className={classes.card_image}>
                 <Slideshow photo={props.photo} className={classes.card_image} />
           </div>
              <div className={classes.main_content_box}>
                <div className={classes.card_content}>
                  <span className={classes.card_title}>
                    {props.info.data.markName}
                  </span>
                  <span className={classes.card_price}>
                    {props.info.data.modelName}
                  </span>
                  <span className={classes.card_price}>
                    {props.info.data.USD} USD
                  </span>
                </div>
                <div className={classes.card_information}>
                  <ul>
                    <li>пробег: {props.info.data.autoData.race}</li>
                    <li>Двигатель: {props.info.data.autoData.fuelName}</li>
                    <li>Коробка передач: {props.info.data.autoData.gearboxName}</li>
                    <li>Привод: {props.info.data.autoData.driveName}</li>
                    <li>Кузов: {props.info.data.autoData.subCategoryNameEng}</li>
                  </ul>
                  <span>{props.info.data.autoData.description}</span>
                </div>
                
                <button className={classes.card_buy}>В избранное</button>
                <button className={classes.card_buy}>Закрыть</button>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
}

export default InfoCarPage;
