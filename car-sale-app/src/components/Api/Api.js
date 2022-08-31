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
  getTypeCars() {
    return axios
      .get(
        `https://developers.ria.com/auto/categories?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response.data
        
      });
  }
};
