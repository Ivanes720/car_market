import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducerFormAdv from '../Redux/reducerFormAdv';


let reducers= combineReducers({
 
    advertisementPage: reducerFormAdv,
  

});
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
 window.store=store;
export default store; 