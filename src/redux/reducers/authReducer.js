const initalState = {
    status: false,
    user: null
}

const authReducer = (state=initalState,action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            localStorage.setItem('bid-donation' , JSON.stringify({
                login: true,
                user_id: action.payload.data.id
            }))
            return{
                status: true, 
                user : action.payload.data
            }
        case "LOGOUT_USER":
            localStorage.removeItem('bid-donation')
            return{
                status: false,
                user : null,
            }
        default:
            return state
    }
}

export default authReducer