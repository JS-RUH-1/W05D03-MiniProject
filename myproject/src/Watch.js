import React from "react";
import { useDispatch, useSelector } from "react-redux";
import youtube from "./reducers/youtube/youtube";
import { removeVideo} from './reducers/youtube/youtube'
import './App.css';


  function Watch (){ 
    const dispatch = useDispatch();

  const state = useSelector((store) => {
    return {
      youtubeArr: store.youtube.videos,
    };
  });

  // const removeVideo = () => {
  //   const video = {
    
  //   };

  //   dispatch(removeVideo(video));
  // };
      return(
          <div className="vid">
        {console.log(state.youtubeArr)}
              {(function() {
          if (state.youtubeArr==[]||state.youtubeArr.length==0) {
            return <h3>Watch Later </h3>;
          } else {
            return (
              state.youtubeArr.map((items)=>{
                return (
                  <div className="dd">
                  <iframe width="420" height="345" src={`https://www.youtube.com/embed/${items.id.videoId}`}></iframe>
                  <h2>
                    {items.snippet.title}
                  </h2>
                  <h5>{items.snippet.channelTitle}</h5>
                  <p>{items.snippet.publishTime}</p>
                  <button className="btnd"
                  onClick={() => {
                    dispatch(removeVideo(items));
                  }}
                > Remove </button>
                </div>
                )
            }

             ) 
            )
          }
        })()}

              
              
          </div>
      )
  }
  export default Watch;