import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setiDS, requestIds } from "../../Redux/reducerCardPage";
import CardCars from "./CardCars";
import * as axios from "axios";

function CardPage() {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.advertisementPage.values);
  const ids = useSelector((state) => state.cardPage.ids);
console.log("ids", ids) 
    useEffect(() => {
      console.log("ids:", ids)
 /*    dispatch(
      requestIds(
        values.category_id,
        values.model_id,
        values.marka_id,
        values.state,
        values.s_yers,
        values.po_yers,
        values.price_ot,
        values.price_do
      ) */
    
  }, ); 


  useEffect(() => {
    ids.map(id =>{ axios
      .get(
        `https://developers.ria.com/auto/info?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs&auto_id=${id}`
      ).then((response) => {
        return console.log("info:",  response);
              });})
   
  }, [ids]);
  
  return (
    <>
      <CardCars />
    </>
  );
}

export default CardPage;
