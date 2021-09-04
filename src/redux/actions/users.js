export const fetchUsers = (data) => {
  return {
    type: "FETCH_USERS",
    payload: {
      data: data,
    },
  };
};
