/* eslint-disable no-lone-blocks */
import { apiForSearchform } from "../../src/components/Api/Api";

const SET_ALL_TYPE_CARS = "SET_ALL_TYPE_CARS";
const SET_MARK_CARS = "SET_MARK_CARS";
const SET_MODEL_CARS = "SET_MODEL_CARS";
const SET_REGION = "SET_REGION";
const SET_VALUES_FROM_FORM = "SET_VALUES_FROM_FORM";


let initialState = {
  typeCars: [],
  markCars: [],
  modelCars: [],
  region: [],
  values: {
    category_id: null,
    marka_id: null,
    model_id: null,
    verifiedVIN: null,
    state: null,
    s_yers: null,
    po_yers: null,
    price_ot: null,
    price_do: null,
  }
};

const reducerFormAdv = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TYPE_CARS: {
      return { 
        ...state, typeCars: action.typeCars };
    }
    case SET_MARK_CARS: {
      return { 
        ...state, markCars: action.markCars };
    };
    case SET_MODEL_CARS: {
      return { 
        ...state, modelCars: action.modelCars };
    };
    case SET_REGION: {
      return { 
        ...state, region: action.region };
    }
    case SET_VALUES_FROM_FORM: {
      return {  
                ...state, values: {...action.values  } };
    }
    default:
      return state;
  }
};
export const setCars = (typeCars) => ({
  type: SET_ALL_TYPE_CARS,
  typeCars,
});
export const setMark = (markCars) => ({
  type: SET_MARK_CARS,
  markCars,
});
export const setModel = (modelCars) => ({
  type: SET_MODEL_CARS,
  modelCars,
});
export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});
export const setValues = (values) => ({
  type: SET_VALUES_FROM_FORM,
  values,
});
export const requestCars = () => {
  return async (dispatch) => {
    let data = await apiForSearchform.getTypeCars();
    dispatch(setCars(data));
       };
 }; 
 export const requestMark = (typeOfCars) => {
  return async (dispatch) => {
    let data = await apiForSearchform.getMarkCars(typeOfCars);
    dispatch(setMark(data));
       };
 }; 
 export const requestModel = (typeOfCars, markOfCars) => {
  return async (dispatch) => {
    let data = await apiForSearchform.getModelCars(typeOfCars, markOfCars);
    dispatch(setModel(data));
       };
 }; 
 export const requestRegion = () => {
  return async (dispatch) => {
    let data = await apiForSearchform.getRegion();
    dispatch(setRegion(data));
       };
 }; 
export default reducerFormAdv;
