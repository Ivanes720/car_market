import { apiForCard } from "../../src/components/Api/Api";
const SET_IDS = "SET_IDS";
let initialState = {
  ids: 
      []
  };

const reducerCardPage = (state = initialState, action) => {
  switch (action.type) {
    case SET_IDS: {
      return {
        ...state,
        ids: action.ids,
      };
    }
    default:
      return state;
  }
};
export const setiDS = (ids) => ({
  type: SET_IDS,
  ids,
});

export const requestIds = (category, marka, model, state,  sYears, poYears, priceOt, priceDo) => {
  return async (dispatch) => {
    let data = await apiForCard.getAllIdsOfSelectedCar(category, marka, model, state,  sYears, poYears, priceOt, priceDo);
        dispatch(setiDS(data));
        console.log(data);
        
  };
  
};

export default reducerCardPage;
