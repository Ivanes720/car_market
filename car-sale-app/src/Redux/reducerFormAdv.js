import { allTypesApi } from "../components/Api/Api";

const SET_ALL_TYPE_CARS = "SET_ALL_TYPE_CARS";

let initialState = {
  typeCars: [],
};

const reducerFormAdv = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TYPE_CARS: {
      return { 
        ...state, typeCars: action.typeCars };
    }
    default:
      return state;
  }
};
export const setCars = (typeCars) => ({
  type: SET_ALL_TYPE_CARS,
  typeCars,
});
export const requestCars = () => {
  return async (dispatch) => {
    let data = await allTypesApi.getTypeCars();
    dispatch(setCars(data));
   };
 };
export default reducerFormAdv;