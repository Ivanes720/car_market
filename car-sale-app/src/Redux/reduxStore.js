import { combineReducers} from "redux";
import reducerFormAdv from '../Redux/reducerFormAdv';
import { createStore,applyMiddleware  } from 'redux';
import thunkMiddleware from 'redux-thunk';

let reducers= combineReducers({
 
    advertisementPage: reducerFormAdv,
  

});
const store = createStore(reducers, applyMiddleware(thunkMiddleware))
 window.store=store;
export default store;               