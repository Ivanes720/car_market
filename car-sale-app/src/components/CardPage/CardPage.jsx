import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardCars from "./CardCars";
import * as axios from "axios";
import { setInfo, setCurrentPage, setTotalCarsCount } from "../../Redux/actions";
import classes from "./cardPage.module.css";

function CardPage() {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.cardPage.ids);
  const info = useSelector((state) => state.cardPage.info);

  useEffect(() => {
    ids.map((id) => { return axios.get(
          `https://developers.ria.com/auto/info?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs&auto_id=${id}`
        )
        .then((response) => {
          return dispatch(setInfo(response));
                          });
    }); 
  }, [ids]); 

  return (
    <div className={classes.card_block}>
           {info.map(object => (
        <CardCars
          autoId={object.data.autoData.autoId}
          photo={object.data.photoData.seoLinkB}
          price={object.data.USD}
          mark={object.data.markName}
          model={object.data.modelName}
        />
      ))}  
    </div>
  );
}

export default CardPage;