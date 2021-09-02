export const fetchAuction = (data) => {
    return {
        type: "FETCH_AUCTION",
        payload: {
            data: data,
        }
    }
}

