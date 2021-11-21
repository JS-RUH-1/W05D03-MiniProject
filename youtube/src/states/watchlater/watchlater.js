const initialState = {
    watchlater: []
}

const watchlater = (state = initialState, {type, payload, id}) => {
    switch (type) {
        case 'add':
            return {
                watchlater: [...state.watchlater, payload]
            }
        case 'remove':
            return {
                watchlater: state.watchlater.filter(video => video.id !== id)
            }
        default:
            return state
    }
}

export const addToWatchList = (id,array) => {
    return {
        type: 'add',
        payload: array,
        id: id
    }
}

export const removeFromWatchList = (id) => {
    return {
        type: 'remove',
        payload: null,
        id: id
    }
}

export default watchlater;