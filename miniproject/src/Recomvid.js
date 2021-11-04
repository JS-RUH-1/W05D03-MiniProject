import React from "react";
import './recomvid.css'
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from 'react';
import data from './data'
import axios from 'axios';
import {addVids} from './reducers/vid/vid';
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import {  addWatchLater} from "./reducers/watchlater/watchlater";

function Recomvid(){
    const [videostate, setVideostate] = useState([]);

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     axios
    //       .get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyD1Fs6YR_JwtRtrI212uins6XjGEqCLwQ4")
    //       .then((res)=>{
    //         dispatch(addVids(res.data.items));
    //         console.log(res.data.items);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       })
    //   },[])

    const state = useSelector((state) => {
       console.log(state)
        return {
          vid: state.vid.vid,
        };
      });

   
    
    //   console.log("state.vid")
    //   console.log(state.vid)

    return (
      <div className="Recomvid">
        <h3>recommended</h3>

        {state.vid.map((items) => {
          return (
            <div className="vid">
                <div className="div-vid">
          <iframe  width="220" height="115" onClick={""}
            src={`https://www.youtube.com/embed/${items.id.videoId}`}>
            </iframe>
              <h4>{items.snippet.title}</h4>
              <p>{items.snippet.channelTitle}</p>
              <WatchLaterIcon    onClick={(e)=> dispatch(addWatchLater(items))}/>
              </div>
            </div>
        
          );
        })}
      </div>
    );
}
export default Recomvid