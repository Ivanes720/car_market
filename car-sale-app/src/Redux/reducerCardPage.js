import { apiForCard } from "../../src/components/Api/Api";
import {
  SET_IDS,
  SET_INFO,
  SET_PHOTO,
  SET_CURRENT_PAGE,
  SET_TOTAL_CARD_COUNT,
  SET_SELECTED_ID,
  IS_LOADING
} from "./actions";
import { setiDS, setInfo, setPhoto,isLoading } from "./actions";
let initialState = {
  ids: [],
  info: [],
  photo: [],
  loading: false,
  selectedId: null
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
        ...state, info: [...state.info, action.info] };
    } 

    case SET_PHOTO: {
      return {
        ...state,
        photo: [action.photo],
      };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_CARD_COUNT: {
      return { ...state, totalCardCount: action.count };
    }
    case SET_SELECTED_ID: {
      return { ...state, selectedId: action.selectedId };
    }
    case IS_LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};
export const setSelectedId = (selectedId) => ({
  type: SET_SELECTED_ID,
  selectedId,
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
    dispatch(setiDS(data.data.result.search_result.ids));
  };
};

export const requestInfo = (id) => {
  return async (dispatch) => {
    dispatch(isLoading(true));
    let data = await apiForCard.getInfoAboutCar(id);
    dispatch(setInfo(data));
    dispatch(isLoading(false));

  };
};
export const requestPhoto = (id) => {
  return async (dispatch) => {
    let data = await apiForCard.getPhoto(id);
    dispatch(setPhoto(data.data));
  };
};
export default reducerCardPage;
