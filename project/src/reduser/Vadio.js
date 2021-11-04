const startState={
    vadios:[]
}

const Vadios = (state=startState , {type , payload}) =>
{
    switch (type) {
        case "ADD_VIDEO":
            // إضافة داخل الarray
            return {vadios : [...state.vadios , payload]}

            case "DELETE_VIDEO":
                return{
                    vadios : state.vadios.filter((element)=>{
                        return element.id !== payload.id;    
                    }),
                };
    
        default:
            return state;
    }



}

export const addVideo =(data) =>{
    return {
        type :"ADD_VIDEO",
        payload:data
    }
}

export const removeVideo =(data) => {
    return {
        type:"DELETE_VIDEO",
        payload : data
    }
}

export default Vadios 