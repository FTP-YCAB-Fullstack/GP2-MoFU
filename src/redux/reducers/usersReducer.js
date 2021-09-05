const usersReducer = (state = [], action) => {
  switch (action.type) {
      case "FETCH_USERS":
          return action.payload.data
      case "REGISTER_USER":
          return [...state , action.payload.data]
      default:
          return state
  }
}

export default usersReducer