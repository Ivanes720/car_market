import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPhoto } from "../../Redux/actions";
import InfoCarPage from "../information/InfoCarPage";
import * as axios from "axios";

function InfoCarPageContainer() {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = useSelector((state) => state.cardPage.selectedId);
  const photo = useSelector((state) => state.cardPage.photo);
  console.log(location.state)
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
    
        <InfoCarPage info={info} photo={photo}/>
    </>
  );
}

export default InfoCarPageContainer;
