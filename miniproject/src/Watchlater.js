import React from "react";
import { deleteWatchLater, addWatchLater } from "./reducers/watchlater/watchlater";
import { useSelector, useDispatch } from "react-redux";
// import WatchVideoCard from "../Compnents/WatchVideoCard";
import { useState} from "react";
import WatchLater from "@material-ui/icons/WatchLater";
import DeleteIcon from "@material-ui/icons/Delete";


function Watchlater() {

  const dispatch = useDispatch();
  const state = useSelector((state) => ({    watchLater: state.watchlater.watchlater}));
  const [watchLater, setwatchLater] = useState();
     console.log(state.watchLater)

//   function wVid(vid) {

//     for (let i = 0; i < state.watchlater.length; i++) {
//       const element = state.watchlater[i];
//       //تاكدي مرة ثانيه
//       console.log(video[i]);
//     }
//     setwatchLater(vid);
//     dispatch(addWatchLater(vid));
//   }

//   console.log(state.watchlater);
  
  return (
    <div className="watchLater11">
   
      {state.watchLater.length?(
          state.watchLater?.map((items)=>(
            <div >
        <iframe  width="220" height="115" onClick={""}
          src={`https://www.youtube.com/embed/${items.id.videoId}`}>
          </iframe>
            <h4>{items.snippet.title}</h4>
            <p>{items.snippet.channelTitle}</p>
            <DeleteIcon onClick={(e)=>dispatch(deleteWatchLater(items))}/>
          </div>
          
          ))
          ):(<h1> no video </h1>)}
          </div>

        // {state.watchlater.map((items) => {
        //     return(
        // <div >
        // <iframe  width="220" height="115" onClick={""}
        //   src={`https://www.youtube.com/embed/${items.id.videoId}`}>
        //   </iframe>
        //     <h4>{items.snippet.title}</h4>
        //     <p>{items.snippet.channelTitle}</p>
        
        //   </div>
        //     );
        // })}
   
    
  );
}




export default Watchlater;