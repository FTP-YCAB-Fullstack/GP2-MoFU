import { combineReducers, createStore , applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import auctionReducer from "./auctionsReducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import modalReducer from "./modalReducer";
import usersReducer from "./usersReducer";
import bidReducer from "./bidReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(
    combineReducers({
        auctions: auctionReducer,
        modal: modalReducer,
        users: usersReducer,
        bids: bidReducer,
    }),
    composedEnhancer
)

export default store