const initialState = {
    darkmode: false
}

const darkmode = (state = initialState, {type}) => {
    switch (type) {
        case 'status':
            return {
                darkmode: !state.darkmode
            }
        default:
            return state
    }
}

export const toggleDarkMode = () => {
    return {
        type: 'status',
    }
}

export default darkmode;