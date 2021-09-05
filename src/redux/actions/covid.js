export const positive = (number) => {
    return ({
        type: "SET_POSITIVE",
        payload: {
            number: number
        }
    })
}

export const recovery = (number) => {
    return ({
        type: "SET_RECOVERY",
        payload: {
            number: number
        }
    })
}

export const death = (number) => {
    return ({
        type: "SET_DEATH",
        payload: {
            number: number
        }
    })
}