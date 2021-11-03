const initialState = {
    watchLater: []
}

const todo = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'updateWatchList':
            return {
                todo: payload
            }
        default:
            return state
    }
}

export const addTodo = (payload) => {
    return {
        type: "updateWatchList",
        payload: payload,
    }
}

export default todo;