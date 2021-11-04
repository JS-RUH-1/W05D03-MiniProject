import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {addvidWatchlater} from "../store/actions";
import Avatar from "@mui/material/Avatar";
import "./VideoCardstyle.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { removevidWatchlater } from "../store/actions";

function WatchLater() {
  const state = useSelector((state) => ({ watchvid: state.watchvid }));
  console.log("========"+state.watchvid)
  const dispatch = useDispatch();

  return (
    <div className="videoCard">
      {state.watchvid.length ? (
        state.watchvid?.map((item) => (
          <div>
            <iframe
              width="246px"
              height="138px"
              title=" "
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
                <p>{item.snippet.channelTitle}</p>
                <p>{item.snippet.publishedAt}</p>
                <DeleteIcon
                  className="sidebarRow__icon"
                  onClick={(e) => dispatch(removevidWatchlater(item))}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="emptyContent">
          <img
            src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
            alt=""
          />
          <h3>No videos </h3>
        </div>
      )}
    </div>
  );
}

export default WatchLater;
