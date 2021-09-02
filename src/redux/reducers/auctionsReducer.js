const auctionReducer = (state = [] , action) => {
    switch(action.type) {
        case "ADD_AUCTION":
            return [...state , action.payload.newData]
        default: 
            return state
    }
}

export default auctionReducer
