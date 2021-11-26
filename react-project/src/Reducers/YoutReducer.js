
///REDUCER  /////////////////////////

const initState={
    yout:[],
    count:0
}

  const YoutReducer =(state=initState,{type,payload})=>{


    switch(type){

        case 'WATCH_LATER':
            
            return{
                yout:[...state.yout,payload],
            }

      case 'REMOVE':
             return{
        yout:state.yout.filter((elm)=>{
          return elm.id !== payload.id
        })
    }
            default:
                return state
    }
    
}

export default YoutReducer;


//ACTION   /////////////////////////////////////////////////////////
export const watchLater=(data)=>{
    return{
        type:'WATCH_LATER',
        payload:data
    }

 
}

export const remove=(data)=>{
return{
    type:'REMOVE',
    payload:data
}
}