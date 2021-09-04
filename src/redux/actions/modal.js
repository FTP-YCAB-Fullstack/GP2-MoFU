export const modal = (button = "login") => {
    return {
        type: "TOGGLE_MODAL",
        payload: {
            button: button
        }
    }
}