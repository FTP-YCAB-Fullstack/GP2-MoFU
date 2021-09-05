export const fetchAuctions = (data) => {
  return {
    type: "FETCH_AUCTION",
    payload: {
      data: data,
    },
  };
};

export const addAuction = (data) => {
  return {
    type: "ADD_AUCTION",
    payload: {
      newData: data,
    },
  };
};
