import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removevidWatchlater } from "./reducers/watchReducer";

function WatchLater() {

    const dispatch = useDispatch();

    const state = useSelector((state) => ({ 
      watchvid: state.watchLaterReducer.watchvid 
    }));
 

  return (
    <div className= "style">
    {console.log(state.watchvid)}
      {state.watchvid.length ? (state.watchvid?.map((e) => 
      (
          <div><iframe title={e.snippet.title} src={`https://www.youtube.com/embed/${e.id.videoId}`}></iframe>
            
            <div>
                <h4>{e.snippet.title}</h4>
                <p>{e.snippet.channelTitle}</p>
                <p>{e.snippet.publishedAt}</p>
                <button className = "btn" onClick={() => dispatch(removevidWatchlater(e))}>Remove</button>
            </div>
            
          </div>
        ))
      ) : (<div><h3>No videos</h3></div>)}
    </div>
  );
}

export default WatchLater;