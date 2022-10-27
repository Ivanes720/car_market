import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "../information/information.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPhoto } from "../../Redux/actions";
import { requestPhoto } from "../../Redux/reducerCardPage";
import * as axios from "axios";
import Slideshow from "../carousel/Carousel";

function InfoCarPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.cardPage.selectedId);
  const photo = useSelector((state) => state.cardPage.photo);

  useEffect(() => {
    axios
      .get(
        `https://developers.ria.com/auto/info?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs&auto_id=${location.state}`
      )
      .then((response) => {
        return dispatch(setId(response));
      });
   
  }, [location.state]);
  useEffect(() => {
    axios
    .get(
      `https://developers.ria.com/auto/fotos/${location.state}?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
    )
    .then((response) => {
      return dispatch(setPhoto(response.data.data));
    });
  }, [location.state]);

  return (
    <>
      {info === null ? (
        <div>loading</div>
      ) : (
        <div className={classes.details_container}>
          <>
            <div className={classes.datails_card}>
              <div className={classes.card_image}>
                 <Slideshow photo={photo} className={classes.card_image} />
           </div>
              <div className={classes.main_content_box}>
                <div className={classes.card_content}>
                  <span className={classes.card_title}>
                    {info.data.markName}
                  </span>
                  <span className={classes.card_price}>
                    {info.data.modelName}
                  </span>
                  <span className={classes.card_price}>
                    {info.data.USD} USD
                  </span>
                </div>
                <div className={classes.card_information}>
                  <ul>
                    <li>пробег: {info.data.autoData.race}</li>
                    <li>Двигатель: {info.data.autoData.fuelName}</li>
                    <li>Коробка передач: {info.data.autoData.gearboxName}</li>
                    <li>Привод: {info.data.autoData.driveName}</li>
                    <li>Кузов: {info.data.autoData.subCategoryNameEng}</li>
                  </ul>
                  <span>{info.data.autoData.description}</span>
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
