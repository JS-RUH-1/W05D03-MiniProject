import React from 'react';
import { useSelector} from "react-redux";
// import {addvidWatchlater} from "../store/actions";
import Avatar from "@mui/material/Avatar";



function WatchLater() {
    const state = useSelector((state) =>({watchvid:state.watchvid}));
console.log(",,,,,,,,,",state.watchvid)
    return (  
      
        <div className="videoCard">
        {state.watchvid.map((item) => {
          return (
            <div>
              <iframe
                 width="246px"
                height= "138px"
                title=" "
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
              ></iframe>
              <div className="videoCard__info">
                <Avatar
                  className="videoCard__avatar"
                  alt={item.snippet.channelTitle}
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                <div className="video__text">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}     
                
                    </p>
                  <p>{item.snippet.publishedAt}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    );
}

export default WatchLater ;