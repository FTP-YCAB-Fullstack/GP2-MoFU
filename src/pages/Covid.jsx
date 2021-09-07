import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import auctionReducer from "./auctionsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import modalReducer from "./modalReducer";
import usersReducer from "./usersReducer";
import bidReducer from "./bidReducer";
import authReducer from "./authReducer";
import covidReducer from "./covidReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  combineReducers({
    auctions: auctionReducer,
    modal: modalReducer,
    users: usersReducer,
    bids: bidReducer,
    auth: authReducer,
    covid: covidReducer,
  }),
  composedEnhancer
);

export default store;
