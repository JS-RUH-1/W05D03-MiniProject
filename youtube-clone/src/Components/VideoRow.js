import axios from 'axios';
import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import "./videoRowStyle.css";
function VideoRow(props) {

  const valueserach = props.valueserach; 
  const [videosSearch, setVideoSearch]= useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${valueserach}&key=AIzaSyC8b31UPAFoSc-JNxWYU_L-jEqEkAgy68I

        `
      )
      .then((res) => {
        // eslint-disable-next-line no-lone-blocks
        {
          console.log(res.data);
       setVideoSearch(res.data.items);
        }
 });
  }, []);

    return (  
        <div className="videoRow">
        {videosSearch.map((item) => {
        return (
          <div>
            <iframe
        
              title=" "
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
            ></iframe>
            <div className="videoRow__text">
                <h3>{item.snippet.title}</h3>
                <p className="videoRow__headline">{item.snippet.channelTitle}</p>
                {/* <p>{item.snippet.description} </p> */}
                <p>{item.snippet.publishedAt}</p>
              </div>
          </div>
        );
      })}
        </div>
    );
}

export default VideoRow;