/* eslint-disable no-lone-blocks */
import { apiForSearchform } from "../../src/components/Api/Api";
import {
  SET_ALL_TYPE_CARS,
  SET_VALUES_FROM_FORM,
  SET_MARK_CARS,
  SET_MODEL_CARS,
  SET_REGION
  } from "./actions";
import {
  setCars,
  setMark,
  setModel,
  setRegion } from "./actions"

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
  },
};

const reducerFormAdv = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_TYPE_CARS: {
      return {
        ...state,
        typeCars: action.typeCars,
      };
    }
    case SET_MARK_CARS: {
      return {
        ...state,
        markCars: action.markCars,
      };
    }
    case SET_MODEL_CARS: {
      return {
        ...state,
        modelCars: action.modelCars,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: action.region,
      };
    }
    case SET_VALUES_FROM_FORM: {
      return {
        ...state,
        values: action.values,
      };
    }
    default:
      return state;
  }
};

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
