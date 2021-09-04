const initialState = {
    status: false,
    form: "login"
}

const modalReducer = (state = initialState , action) => {
    console.log(action.type)
    if(action.type === 'TOGGLE_MODAL'){
        return {
            status: !state.status,
            form: action.payload.button
        }
    } else if(action.type === "CHANGE_TO_REGISTER"){
        return {
            ...state,
            form: "register"
        }
    }
    return state
}

export default modalReducer