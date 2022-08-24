import { combineReducers} from "redux";
import reducerFormAdv from '../Redux/reducerFormAdv';
import { createStore } from 'redux';

let reducers= combineReducers({
 
    advertisementPage: reducerFormAdv,
  

});
const store = createStore(reducers)
console.log(store.getState())
 window.store=store;
export default store;               