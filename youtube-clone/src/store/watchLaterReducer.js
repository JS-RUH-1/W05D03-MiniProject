const initialState ={
    watchvid: [],
};


const watchLaterReducer =(state= initialState, {type,payload})=>{

    switch (type) {
        case "ADD_VID":
            if(state.watchvid.some((e)=>e.id===payload.id))return state;
            return {watchvid:[...state.watchvid,payload]};

    
        default:
            return state;
    }
}

export default watchLaterReducer;