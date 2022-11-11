export const SET_ALL_TYPE_CARS = "SET_ALL_TYPE_CARS";
export const SET_VALUES_FROM_FORM = "SET_VALUES_FROM_FORM";
export const SET_MARK_CARS = "SET_MARK_CARS";
export const SET_MODEL_CARS = "SET_MODEL_CARS";
export const SET_REGION = "SET_REGION";
export const SET_IDS = "SET_IDS";
export const SET_INFO = "SET_INFO";
export const SET_PHOTO = "SET_PHOTO";
export const SET_SELECTED_ID = "SET_SELECTED_ID";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_CARD_COUNT = "SET_TOTAL_CARD_COUNT";
export const IS_LOADING="IS_LOADING";

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
export const setiDS = (ids) => ({
  type: SET_IDS,
  ids,
});

export const setInfo = (info) => ({
  type: SET_INFO,
  info,
});
export const setPhoto = (photo) => ({
  type: SET_PHOTO,
  photo,
});
export const setId = (selectedId) => ({
  type: SET_SELECTED_ID,
  selectedId,
});
export const isLoading = (isLoading) => ({
  type: IS_LOADING,
  isLoading,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCardCount = (totalCardCount) => ({
  type: SET_TOTAL_CARD_COUNT,
  count: totalCardCount,
});