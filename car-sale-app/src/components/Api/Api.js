import * as axios from "axios";

export const apiForSearchform = {
  getTypeCars() {
    return axios
      .get(
        `https://developers.ria.com/auto/categories?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response.data
        
      });
  },
  getMarkCars(typeOfCars=1) {
    return axios
      .get(
        `https://developers.ria.com/auto/categories/${typeOfCars}/marks?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response.data
        
      });
  },
  getModelCars(typeOfCars=1, markOfCars=9) {
    return axios
      .get(
        `https://developers.ria.com/auto/categories/${typeOfCars}/marks/${markOfCars}/models?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response.data
              });
  },
  getRegion() {
    return axios
      .get(
        `https://developers.ria.com/auto//states?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response.data
              });
  },
};


export const apiForCard = {
  getAllIdsOfSelectedCar(category, marka, model, state,  sYears, poYears, priceOt, priceDo) {
    return axios
      .get(
        `https://developers.ria.com/auto/search?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs&category_id=${category}&marka_id[0]=${marka}&model_id[0]=${model}&state[0]=${state}&s_yers[0]=${sYears}&po_yers[0]=${poYears}&price_ot=${priceOt}&price_do=${priceDo}`
      ).then((response) => {
        if ( response.status===200)
        return  response.data.result.search_result
        
      });
  },
  getPhoto(id) {
    return axios
      .get(
        `https://developers.ria.com/auto/fotos/${id}?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response;
        
      });
  },
  getInfoAboutCar(id) {
    return axios
      .get(
        `https://developers.ria.com/auto/info?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs&auto_id=${id}`
      ).then((response) => {
        return response;
              });
  }
};
