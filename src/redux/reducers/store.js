import { combineReducers, createStore } from "redux";
import auctionReducer from "./auctionsReducer";

const store = createStore(
    combineReducers({
        auctions: auctionReducer
    }),
    (typeof window !== 'undefined' && window.devToolsExtension) ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

export default store