import { combineReducers } from "redux";
import reducerFormAdv from "../Redux/reducerFormAdv";
import reducerCardPage from "../Redux/reducerCardPage";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  advertisementPage: reducerFormAdv,
  cardPage: reducerCardPage,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
