import { createStore, applyMiddleware } from "redux";
import ipInfoReducer from "./reducers/ipInfoReducers";
import thunk from "redux-thunk";

const store = createStore(ipInfoReducer, applyMiddleware(thunk));

export default store;
