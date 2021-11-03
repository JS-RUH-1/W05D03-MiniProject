/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import "./VideoCardstyle.css";
import { useDispatch, useSelector } from "react-redux";
import { addvidWatchlater } from "../store/actions";
function VideoCard() {
  const [videoObj, setVideoObj] = useState([]);

  const dispatch = useDispatch();
  const state = useSelector((state) => ({ wachvid: state.wachvid }));

  //----------------
  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&chart=mostPopular&key=AIzaSyC8b31UPAFoSc-JNxWYU_L-jEqEkAgy68I"
      )
      .then((res) => {
        // eslint-disable-next-line no-lone-blocks
        {
          // console.log(res.data.items);
          setVideoObj(res.data.items);
        }
      });
  }, []);
  //-------------

  return (
    <div className="videoCard">
      {videoObj.map((item) => {
        return (
          <div>
            {/* <img src={item.snippet.thumbnails.default.url} alt="" />  */}
            <iframe
              width="246px"
              height="138px"
              src={`https://www.youtube.com/embed/${item.id.videoId}`}
            ></iframe>
            <div className="videoCard__info">
              {/* <Avatar
                className="videoCard__avatar"
                alt={item.snippet.channelTitle}
                src="https://mui.com/static/images/avatar/2.jpg"
              /> */}
              <div className="video__text">
                <h4>{item.snippet.title}</h4>
                <p>
                  {item.snippet.channelTitle}
                  <WatchLaterIcon
                    onClick={(e) => dispatch(addvidWatchlater(item))}
                    className="sidebarRow__icon"
                  />
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
export default VideoCard;
