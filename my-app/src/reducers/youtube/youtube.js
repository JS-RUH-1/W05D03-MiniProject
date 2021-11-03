const initialState = {
    input: '',
    arr: []
}

const youtube=(state = initialState, { type, paylod })=> {

    switch (type) {
        case "SAVE_INPUT":
            return { input: paylod }

        case "ARRSY_RESPONCE":
            return { arr: paylod }

        default:
            return state;
    }
}

export default youtube

export const saveInput=(input)=> {

    return {
        type: "SAVE_INPUT",
        paylod: input
    }

}

export const arrOfRes=(arr) =>{

    return {
        type: "ARRSY_RESPONCE",
        paylod: arr
    }
}



