const initalState = {
    status: false,
    user: null
}

const authReducer = (state=initalState,action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            return{
                status: true, 
                user : action.payload.data
            }
        case "LOGOUT_USER":
            return{
                status: false,
                user : null,
            }
        default:
            return state
    }
}

export default authReducer