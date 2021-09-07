export const fetchBids = (data) => {
    return ({
        type: "FETCH_BIDS",
        payload: {
            data : data
        }
    })
}

export const addBid = (data) => {
    return ({
        type: "ADD_BID",
        payload: {
            newData : data
        }
    })
}