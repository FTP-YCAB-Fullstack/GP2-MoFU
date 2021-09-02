const auctionReducer = (state = [] , action) => {
    switch(action.type) {
        case "ADD_AUCTION":
            return [...state , action.payload.newData]
        case "FETCH_AUCTION":
            return action.payload.data
        default: 
            return state
    }
}

export default auctionReducer
