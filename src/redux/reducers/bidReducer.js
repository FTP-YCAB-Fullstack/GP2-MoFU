const bidReducer = (state=[],action) =>{
  switch (action.type) {
      case "ADD_BID":
          return[...state,action.payload.newData]
      case"FETCH_BIDS":
          return action.payload.data
      default:
          return state
  }
}

export default bidReducer