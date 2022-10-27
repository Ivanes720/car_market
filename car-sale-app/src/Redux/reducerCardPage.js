import { apiForCard } from "../../src/components/Api/Api";
import {
  SET_IDS,
  SET_INFO,
  SET_PHOTO,
  SET_CURRENT_PAGE,
  SET_TOTAL_CARS_COUNT,
  SET_SELECTED_ID,
} from "./actions";
import {
  setiDS, setInfo,
    setPhoto } from "./actions"
let initialState = {
  ids: [],
  info: [],
  photo: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 2,
  selectedId: null,
};
const reducerCardPage = (state = initialState, action) => {
  switch (action.type) {
       case SET_IDS: {
      return {
        ...state,
        ids: action.ids,
      };
    } 
 
 case SET_INFO: {
         return {
        ...state,
      info: [...state.info, action.info],
      };
    } 
    case SET_PHOTO: {
      return {
        ...state,
        photo: [ action.photo],
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_CARS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case SET_SELECTED_ID: {
      return { ...state, selectedId: action.selectedId };
    }
    default:
      return state;
  }
};
export const setSelectedId = (selectedId) => ({
  type: SET_SELECTED_ID,
  selectedId,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setCarsTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_CARS_COUNT,
  count: totalUsersCount,
});
export const requestIds = (
  category,
  marka,
  model,
  state,
  sYears,
  poYears,
  priceOt,
  priceDo
) => {
  return async (dispatch) => {
    let data = await apiForCard.getAllIdsOfSelectedCar(
      category,
      marka,
      model,
      state,
      sYears,
      poYears,
      priceOt,
      priceDo
    );
    dispatch(setiDS(data.ids));
    //dispatch(setCarsTotalCount(data.count));
  };
};

export const requestInfo = (id) => {
  return async (dispatch) => {
    let data = await apiForCard.getInfoAboutCar(id);
    dispatch(setInfo(data));
  };
};
export const requestPhoto = (id) => {
  return async (dispatch) => {
    let data = await apiForCard.getPhoto(id);
    dispatch(setPhoto(data.data));
  };
};
export default reducerCardPage;
