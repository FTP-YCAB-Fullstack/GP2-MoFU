export const loginUser = (data) =>{
    return ({
        type : "LOGIN_USER",
        payload: {
            data : data
        }
    })
}

export const logoutUser = () =>{
    return({
        type:"LOGOUT_USER",
    })
}