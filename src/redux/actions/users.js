export const fetchUsers = (data) => {
  return{
      type : "FETCH_USERS",
      payload : {
          data : data
      }
  }
}

export const registerUser = (data) => {
  return {
      type: "REGISTER_USER",
      payload: {
          data: data
      }
  }
}