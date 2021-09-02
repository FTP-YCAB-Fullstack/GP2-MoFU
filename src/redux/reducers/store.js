import { combineReducers, createStore , applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import auctionReducer from "./auctionsReducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
    combineReducers({
        auctions: auctionReducer
    }),
    composedEnhancer
)

export default store