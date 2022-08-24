import * as axios from "axios";

export const allTypesApi = {
  getTypeCars() {
    return axios
      .get(
        `https://developers.ria.com/auto/categories?api_key=udjpgRF2gjAOp6ov2xYgOEcXLwXxpeFuN5JuUbjs`
      ).then((response) => {
        return response
      });
  },
};
