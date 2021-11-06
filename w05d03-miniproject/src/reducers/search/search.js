const initialState={ search:""};


const search = (state=initialState,{type,payload})=>{
    switch (type) {
        case "SEARCH_WORD":
            return{search:payload}
        default:
            return state;
    }
}

export default search;

export const searchWord = (current)=>{
    return{
        type:"SEARCH_WORD",
        payload:current
    }
}
