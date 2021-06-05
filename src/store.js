import currentUser from "./reducers/currentUser"
import  loginFormReducer from './reducers/loginFormReducer'
import { combineReducers } from "redux";
import promiseMiddleware from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


const rootReducer = combineReducers({
  currentUser: currentUser,
  loginFormReducer
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware), applyMiddleware(thunk)));

export default store;
